-- profiles: one row per signed-up user, populated by trigger on auth.users insert.
-- initials: create later
-- picture: ceate later
-- color_config: create later
create table public.profiles (
    id uuid primary key references auth.users(id) on delete cascade,
    email text,
    display_name text,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "profiles_select_own"
    on public.profiles for select
    using (auth.uid() = id);

create policy "profiles_update_own"
    on public.profiles for update
    using (auth.uid() = id)
    with check (auth.uid() = id);

-- logins: one row per sign-in event, inserted client-side after SIGNED_IN.
create table public.logins (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references auth.users(id) on delete cascade,
    provider text,
    user_agent text,
    occurred_at timestamptz not null default now()
);

create index logins_user_id_occurred_at_idx
    on public.logins (user_id, occurred_at desc);

alter table public.logins enable row level security;

create policy "logins_select_own"
    on public.logins for select
    using (auth.uid() = user_id);

create policy "logins_insert_own"
    on public.logins for insert
    with check (auth.uid() = user_id);

-- Trigger: when a new auth.users row is created, seed a profiles row.
-- security definer so it can write to public.profiles regardless of the caller.
create function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
    insert into public.profiles (id, email)
    values (new.id, new.email);
    return new;
end;
$$;

create trigger on_auth_user_created
    after insert on auth.users
    for each row execute function public.handle_new_user();
