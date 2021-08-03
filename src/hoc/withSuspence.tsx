import React from 'react';

export function withSuspence<WPC>(WrappedComponent: React.ComponentType<WPC>) {
  return (props: WPC) => {
    return (
      <React.Suspense fallback={<div>loading ...</div>}>
        <WrappedComponent {...props} />
      </React.Suspense>
    );
  };
}
