'use strict';

window.addEventListener('load', () => {
  // request
  const posts = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestieLorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestie.',
      author: {
        name: 'John Doe'
      },
      updatedAt: new Date('2020-03-08T20:40:00'),
    },
    {
      id: 2,
      title: 'Lorem Ipsum 2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestieLorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestie.',
      author: {
        name: 'John Doe 2'
      },
      updatedAt: new Date('2020-03-08T23:00:00'),
    },
    {
      id: 3,
      title: 'Lorem Ipsum 3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestieLorem ipsum dolor sit amet, consectetur adipiscing elit. In est risus, sodales in ipsum eget, malesuada semper ipsum. Integer aliquam sapien sit amet nulla finibus pellentesque. Maecenas ac ante vitae erat porttitor ultrices id vel massa. In mollis lorem in sem vulputate molestie.',
      author: {
        name: 'John Doe 3'
      },
      updatedAt: new Date('2020-03-09T13:30:00'),
    },
  ]

  const postsList = document.querySelector('#posts-list');

  // Loop para cada post inserir o HTML com seus dados
  posts.forEach((post) => {
    // const postElement = `
    // <!-- card -->
    // <div class="card p-4 mb-5">
    //   <!-- card body -->
    //   <div class="card-body p-0 pb-5">
    //     <h5 class="card-title">${post.title}</h5>
    //     <div class="text-secondary">
    //       <p class="card-text truncate truncate-2">${post.body}</p>
    //     </div>
    //   </div>
    //   <!-- card footer -->
    //   <div class="card-footer bg-white p-0 pt-4">
    //     <div class="row justify-content-between align-items-center">
    //       <!-- details -->
    //       <div class="col">
    //         <div class="row">
    //           <div class="col-md-auto">
    //             <img class="card__avatar-icon" src="assets/avatar-icon.png" alt="" aria-hidden="true">
    //           </div>
    //           <div class="col">
    //             <div class="row">
    //               <div class="col card__details-primary">
    //                 <span>${post.author.name}</span>
    //               </div>
    //               <div class="w-100 d-none d-md-block"></div>
    //               <div class="col card__details-secondary">
    //                 <span>${post.updatedAt}</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <!-- action buttons -->
    //       <div class="col text-right">
    //         <a id="post-url" href="post.html?id=${post.id}" class="btn btn-primary btn-sm">Leia mais</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>`;
    // postsList.innerHTML += postElement;
    
    // ===========

    // const cardElement = document.createElement('div');
    // const cardBody = document.createElement('div');
    // cardBody.classList = ['card-body', 'p-0', 'pb-5'];
    // cardBody.textContent = post.title;
    // cardElement.appendChild(cardBody);
    // // vocẽs entenderam...
    // postsList.appendChild(cardElement);

    // ===========

    // Instancia o template para cada post
    const postTemplate = document.querySelector('#post-template');

    // Define os dados daquele post
    postTemplate.content.querySelector('#post-title').textContent = post.title;
    postTemplate.content.querySelector('#post-body').textContent = post.body;
    postTemplate.content.querySelector('#post-author-name').textContent = post.author.name;
    postTemplate.content.querySelector('#post-last-update').textContent =
      `Última atualização em: ${formatDate(post.updatedAt)}`;
    postTemplate.content.querySelector('#post-url').href = `post.html?id=${post.id}`;
    
    // Clona o <template> para a tag desejada
    const postClone = document.importNode(postTemplate.content, true);
    postsList.appendChild(postClone);
  });
});
