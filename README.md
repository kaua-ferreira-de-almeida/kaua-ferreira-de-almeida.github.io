# Publicar seu portfólio gratuitamente no GitHub Pages

O código já é um site estático completo: HTML, CSS, JavaScript, imagens e vídeos. Para receber visitas por um endereço público, basta hospedar esses arquivos. Não é necessário instalar Node, executar um build ou contratar um plano do Framer.

## 1. Extrair o pacote

Baixe `Portfolio_Kaua_Atualizado.zip` e extraia o conteúdo. A pasta extraída deve mostrar `index.html`, `README.md` e as pastas `assets`, `3d-reconstruction`, `bioactive-pla` e `deformable-objects`. O arquivo `.nojekyll` também está incluído; alguns sistemas escondem nomes que começam com ponto.

Você pode abrir `index.html` no navegador para ver o site no seu computador.

## 2. Criar o repositório

Entre na sua conta em https://github.com. No menu `+`, escolha `New repository`.

Como seu usuário agora é `kaua-ferreira-de-almeida`, crie o repositório com o nome **`kaua-ferreira-de-almeida.github.io`**.

Selecione `Public`, ative `Add README` e crie o repositório. O GitHub Pages é gratuito para repositórios públicos no plano GitHub Free.

Se você já usa esse nome para outro site, pode criar um repositório chamado `portfolio`. Nesse caso, o endereço será `https://kaua-ferreira-de-almeida.github.io/portfolio/`. Os caminhos relativos deste pacote funcionam nas duas opções.

## 3. Enviar os arquivos

Dentro do repositório, escolha `Add file` → `Upload files`.

Arraste o conteúdo da pasta extraída para a área de envio, incluindo as pastas completas. Mantenha `index.html` diretamente na raiz do repositório, no mesmo nível de `assets`, `3d-reconstruction`, `bioactive-pla` e `deformable-objects`. É o conteúdo extraído que precisa ser enviado.

Confirme as alterações na branch `main`, com uma mensagem como `Adicionar portfólio`.

Os oito vídeos foram otimizados para a web e estão abaixo do limite de 25 MiB por arquivo para envio pelo navegador. O conjunto completo cabe em um envio de menos de 100 arquivos.

## 4. Ativar a hospedagem

No repositório, abra `Settings` → `Pages`.

Em `Build and deployment`, configure:

| Campo | Valor |
| --- | --- |
| Source | Deploy from a branch |
| Branch | main |
| Folder | /(root) |

Clique em `Save`.

## 5. Abrir o site

Espere a publicação terminar; pode levar até 10 minutos. Volte a `Settings` → `Pages` e clique em `Visit site`.

Depois de publicado, o endereço será `https://kaua-ferreira-de-almeida.github.io/`. Esse é o link público para colocar no currículo, no LinkedIn e nas candidaturas.

Confira a página inicial, os três projetos, os vídeos e o link do CV. Os visitantes do GitHub Pages podem abrir o portfólio sem uma conta ChatGPT.

## 6. Atualizar depois

Edite os arquivos necessários, envie as novas versões para o mesmo repositório e confirme as alterações na branch `main`. O Pages republica o site automaticamente.

O conteúdo da página inicial está em `index.html`. Os projetos estão em `3d-reconstruction/index.html`, `bioactive-pla/index.html` e `deformable-objects/index.html`. O estilo fica em `assets/styles.css` e os vídeos em `assets/videos`.

Se aparecer um erro 404, confira se o `index.html` está na raiz e se o Pages está usando `main` com `/(root)`. A aba `Actions` mostra o andamento ou um eventual erro da publicação.

## Documentação oficial consultada

- https://docs.github.com/en/account-and-profile/how-tos/account-management/changing-your-username
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
