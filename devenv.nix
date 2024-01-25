{ inputs, pkgs, ... }:

{
  packages = with pkgs; [
    bun
    nodejs
    (writeScriptBin "helpme" ''
      __usage="
      👋 Welcome to iPOS development environment. 🚀
      If you see this message, it means your are inside the Nix shell ❄️.

      [Info]===============================================================>

      Command available:
        - start:            start project in production ( need to run build first  ) 🛹
        - build:            build project for production
        - dev:              start development server
        - helpme:           show this messages

      Repository:
        - https://github.com/maulanasdqn/ipos
      [Info]===============================================================>
      "
      echo "$__usage"
    '')

    (writeScriptBin "dev" ''
      bun dev
    '')

    (writeScriptBin "build" ''
      bun run build
    '')

    (writeScriptBin "start" ''
      bun start
    '')
  ];

  enterShell = ''
    helpme
  '';

  languages.typescript.enable = true;

  services.postgres = with pkgs; {
    enable = true;
    package = postgresql_15;
    initialDatabases = [{ name = "pos-db"; }];
  };

}
