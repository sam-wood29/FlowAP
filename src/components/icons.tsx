import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function GitHubIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.19 1.18a11.1 11.1 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.55 4.57-1.52 7.85-5.83 7.85-10.91C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 11v3.84h5.36c-.22 1.42-1.64 4.16-5.36 4.16-3.22 0-5.85-2.67-5.85-5.96S8.78 7.08 12 7.08c1.83 0 3.05.78 3.75 1.45l2.55-2.46C16.66 4.59 14.55 3.7 12 3.7 6.94 3.7 2.85 7.79 2.85 12.85S6.94 22 12 22c5.93 0 9.86-4.17 9.86-10.04 0-.67-.07-1.18-.16-1.69H12Z" />
    </svg>
  );
}

export function EnvelopeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
      aria-hidden="true"
      {...props}
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
      aria-hidden="true"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function PopBackIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="20"
      height="20"
      aria-hidden="true"
      {...props}
    >
      <path d="M9 6 3 12l6 6" />
      <path d="M3 12h18" />
    </svg>
  );
}
