# Atualizar o portfólio no GitHub Pages

A página inicial em francês e a versão em inglês mostram os projetos antes das publicações. Os botões Découvrir mes projets e Me contacter têm o mesmo fundo verde. Me contacter abre a seção com e-mail e telefone.

A página do S9 apresenta o objetivo com o UR3e e a câmera no braço, os trabalhos em simulação, o estudo de segmentação e as próximas etapas. O projeto está identificado como em andamento. A seção de publicações destaca o artigo publicado, a submissão à IEEE RA-L e os seis trabalhos de congresso do Lattes.

1. Extraia o ZIP. Na pasta extraída, o arquivo index.html deve aparecer ao lado de en, assets e vision-guided-manipulation.
2. Abra https://github.com/kaua-ferreira-de-almeida/kaua-ferreira-de-almeida.github.io e selecione a branch main.
3. Na página Code do repositório, clique em Add file e depois Upload files. Arraste o conteúdo extraído, com todas as pastas, para a área de upload.
4. Confira se index.html está na raiz e en/index.html na pasta en. Os arquivos de mesmo caminho serão substituídos pelo upload. Escreva uma mensagem como Atualizar publicações e projeto S9 e confirme o commit na branch main.
5. Na aba Actions, aguarde o workflow de publicação do Pages concluir. Abra https://kaua-ferreira-de-almeida.github.io/ e confira a ordem Projets e Publications, o botão verde Me contacter, a página de S9 e o botão EN.

Se o site já usa main e /(root) em Settings → Pages, essa configuração é suficiente. O arquivo .nojekyll do pacote deve ficar na raiz. Mantenha-o caso já esteja no repositório.

## CV

O PDF de revisão é entregue à parte. O botão do site usa CV_Kaua_FERREIRA_DE_ALMEIDA_QR.pdf. Depois de aprovar a revisão, você pode dar esse nome ao novo PDF, enviá-lo para a raiz e confirmar outro commit.
