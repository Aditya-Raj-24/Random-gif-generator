import React from 'react';

const Spinner = () => {
  return (
    <div className='spinner'>
      <style>
        {`
          .spinner {
            @apply relative w-5 h-5;
          }

          .spinner::before,
          .spinner::after {
            @apply content '';
            @apply w-full h-full block absolute;
            @apply animate-spinner-b4c8mmmd 0.5s backwards animate-spinner-49opz7md 1.25s 0.5s infinite ease;
            @apply border-2 border-blue-500 rounded-full;
            @apply shadow-blue-500;
          }

          .spinner::after {
            @apply animate-delay-0s;
          }

          @keyframes animate-spinner-b4c8mmmd {
            from {
              @apply shadow-none;
            }
          }

          @keyframes animate-spinner-49opz7md {
            to {
              @apply transform rotate-360;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Spinner;