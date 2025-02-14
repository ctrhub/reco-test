/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './routes/__root';
import { Route as appAppImport } from './routes/(app)/_app';
import { Route as appAppIndexImport } from './routes/(app)/_app/index';
import { Route as appAppTodosImport } from './routes/(app)/_app/todos';

// Create Virtual Routes

const appImport = createFileRoute('/(app)')();

// Create/Update Routes

const appRoute = appImport.update({
  id: '/(app)',
  getParentRoute: () => rootRoute,
} as any);

const appAppRoute = appAppImport.update({
  id: '/_app',
  getParentRoute: () => appRoute,
} as any);

const appAppIndexRoute = appAppIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => appAppRoute,
} as any);

const appAppTodosRoute = appAppTodosImport.update({
  id: '/todos',
  path: '/todos',
  getParentRoute: () => appAppRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(app)': {
      id: '/(app)';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof appImport;
      parentRoute: typeof rootRoute;
    };
    '/(app)/_app': {
      id: '/(app)/_app';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof appAppImport;
      parentRoute: typeof appRoute;
    };
    '/(app)/_app/todos': {
      id: '/(app)/_app/todos';
      path: '/todos';
      fullPath: '/todos';
      preLoaderRoute: typeof appAppTodosImport;
      parentRoute: typeof appAppImport;
    };
    '/(app)/_app/': {
      id: '/(app)/_app/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof appAppIndexImport;
      parentRoute: typeof appAppImport;
    };
  }
}

// Create and export the route tree

interface appAppRouteChildren {
  appAppTodosRoute: typeof appAppTodosRoute;
  appAppIndexRoute: typeof appAppIndexRoute;
}

const appAppRouteChildren: appAppRouteChildren = {
  appAppTodosRoute: appAppTodosRoute,
  appAppIndexRoute: appAppIndexRoute,
};

const appAppRouteWithChildren = appAppRoute._addFileChildren(appAppRouteChildren);

interface appRouteChildren {
  appAppRoute: typeof appAppRouteWithChildren;
}

const appRouteChildren: appRouteChildren = {
  appAppRoute: appAppRouteWithChildren,
};

const appRouteWithChildren = appRoute._addFileChildren(appRouteChildren);

export interface FileRoutesByFullPath {
  '/': typeof appAppIndexRoute;
  '/todos': typeof appAppTodosRoute;
}

export interface FileRoutesByTo {
  '/todos': typeof appAppTodosRoute;
  '/': typeof appAppIndexRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/(app)': typeof appRouteWithChildren;
  '/(app)/_app': typeof appAppRouteWithChildren;
  '/(app)/_app/todos': typeof appAppTodosRoute;
  '/(app)/_app/': typeof appAppIndexRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/todos';
  fileRoutesByTo: FileRoutesByTo;
  to: '/todos' | '/';
  id: '__root__' | '/(app)' | '/(app)/_app' | '/(app)/_app/todos' | '/(app)/_app/';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  appRoute: typeof appRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
  appRoute: appRouteWithChildren,
};

export const routeTree = rootRoute._addFileChildren(rootRouteChildren)._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(app)"
      ]
    },
    "/(app)": {
      "filePath": "(app)",
      "children": [
        "/(app)/_app"
      ]
    },
    "/(app)/_app": {
      "filePath": "(app)/_app.tsx",
      "parent": "/(app)",
      "children": [
        "/(app)/_app/todos",
        "/(app)/_app/"
      ]
    },
    "/(app)/_app/todos": {
      "filePath": "(app)/_app/todos.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/": {
      "filePath": "(app)/_app/index.tsx",
      "parent": "/(app)/_app"
    }
  }
}
ROUTE_MANIFEST_END */
