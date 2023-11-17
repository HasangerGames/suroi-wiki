with (import <nixpkgs> { });
mkShell {
  buildInputs = [
    nodejs_20
    nodePackages.pnpm
  ];
}
