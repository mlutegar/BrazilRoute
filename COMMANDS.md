# GIT

Comando para adicionar todos os arquivos:

```bash
$ git add .
```

Comando para fazer commit dos arquivos:

```bash
$ git commit -m "feat: adicionando o header" --no-verify
```

Comando para fazer push dos arquivos:

```bash
$ git push --no-verify
```

# VTEX

Comando para ver os workspaces:

```bash
$ vtex workspace list
```

Comando para trocar de workspace:

```bash
$ vtex workspace use silvatestemlutegar
```

Comando para configurar o vtex (caso não esteja rodando):

```bash
$ vtex setup
```

Comando para rodar o vtex:

```bash
$ vtex link
```

Comando para publicar o vtex:

```bash
$ vtex publish
```

Comando instalar o app publicado:

```bash
$ vtex install {appvendor}.{appname}@{appversion}
```

Comando para dá deploy no app (Lembre-se de mudar o urlSite antes de dá deploy):

```bash
$ vtex deploy {appvendor}.{appname}@{appversion}
```

# React

Para rodar o projeto localmente:

```bash
$ npm run start-windows
```