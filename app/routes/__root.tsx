import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { Meta, Scripts } from '@tanstack/start';
import type { QueryClient } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import appCss from '@/styles/app.css?url';

import { NotFound } from '@/components/pages/not-found';
import { CookieUtils } from '@/utils/cookie.utils';
import { THEME_COOKIE_KEY } from '@/components/providers/theme-provider';
import { SeoUtils } from '@/utils/seo.utils';
import { DefaultCatchBoundary } from '@/components/pages/default-catch-boundary';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Reco Test App',
      },
      ...SeoUtils.seo({
        title: 'Reco Test App',
        description: 'Test React app using Tanstack Start Kit',
      }),
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const theme = CookieUtils.getCookie(THEME_COOKIE_KEY);

  return (
    <html className={theme}>
      <head>
        <Meta />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
