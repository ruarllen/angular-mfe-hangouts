# Microfrontends with Angular and Module Federation

This repo contains a simple example of Angular with Module Federation.

## Repo Layout

- mfe-host

The application that will hold others microfrontends.
- mfe-app-a

The first MFE of the application

- mfe-app-b

The second MFE of the application

## Packages used:
- @angular/cli@12.2.16
- @angular/elements@12.2.16 (for all mfes except host)
- @angular-architects/module-federation@^12.5.3