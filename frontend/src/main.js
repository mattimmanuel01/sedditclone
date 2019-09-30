/**
 * Written by A. Hinds with Z. Afzal 2018 for UNSW CSE.
 *
 * Updated 2019.
 */

// import your own scripts here.
// your app must take an apiUrl as an argument --
// this will allow us to verify your apps behaviour with
// different datasets.

function signup(){
  if(document.querySelector("#signup") != null){
    document.querySelector("#signup").remove();
  }
  if(document.querySelector("#signin") != null){
    document.querySelector("#signin").remove();
  }
  let main = document.querySelector("main");
  let feed = document.querySelector("#feed");

  let modal = document.createElement("div");
  modal.setAttribute("class","modal");
  modal.setAttribute("id","signup");

  let form = document.createElement("form");
  form.setAttribute("class","modalInside animate");

  let divContainerModalHeader = document.createElement("div");
  divContainerModalHeader.setAttribute("style","background-color:#f1f1f1");
  divContainerModalHeader.setAttribute("class","containerModalHeader");
  let cancelButton = document.createElement("button");
  cancelButton.setAttribute("class","btn cancelbtn");
  let cancelText = document.createTextNode("X");
  cancelButton.appendChild(cancelText);
  cancelButton.addEventListener("click",() => {
      document.getElementById('signup').style.display='none'
  })
  divContainerModalHeader.appendChild(cancelButton);

  let divContainerModal = document.createElement("div");
  divContainerModal.setAttribute("class","containerModal");

  let labelname = document.createElement("label");
  let nametext = document.createTextNode("Name");
  labelname.appendChild(nametext);

  let inputName = document.createElement("input");
  inputName.setAttribute("id","inputName");
  inputName.setAttribute("class","inputBoxes");
  inputName.setAttribute("type","text");
  inputName.setAttribute("placeholder","Enter Username");

  divContainerModal.appendChild(labelname);
  divContainerModal.appendChild(inputName);

  let labelEmail = document.createElement("label");
  let emailt = document.createTextNode("Email Address");
  labelEmail.appendChild(emailt);

  let inputEmail = document.createElement("input");
  inputEmail.setAttribute("id","inputEmail");
  inputEmail.setAttribute("class","inputBoxes");
  inputEmail.setAttribute("type","email");
  inputEmail.setAttribute("placeholder","Enter Username");

  divContainerModal.appendChild(labelEmail);
  divContainerModal.appendChild(inputEmail);
  
  let labelUsername = document.createElement("label");
  let usernameText = document.createTextNode("Username");
  labelUsername.appendChild(usernameText);

  let inputUsername = document.createElement("input");
  inputUsername.setAttribute("id","inputUsernameSignup");
  inputUsername.setAttribute("class","inputBoxes");
  inputUsername.setAttribute("type","text");
  inputUsername.setAttribute("placeholder","Enter Username");

  divContainerModal.appendChild(labelUsername);
  divContainerModal.appendChild(inputUsername);

  let labelPassword = document.createElement("label");
  let passwordText = document.createTextNode("Password");
  labelPassword.appendChild(passwordText);

  let inputPassword = document.createElement("input");
  inputPassword.setAttribute("id","inputPasswordSignup");
  inputPassword.setAttribute("class","inputBoxes");
  inputPassword.setAttribute("type","password");
  inputPassword.setAttribute("placeholder","Enter Password");
  divContainerModal.appendChild(labelPassword);
  divContainerModal.appendChild(inputPassword);

  let submitButton = document.createElement("button");
  let submitText = document.createTextNode("Submit");
  submitButton.appendChild(submitText);
  submitButton.setAttribute("class","button button-secondary");
  submitButton.setAttribute("type","submit");
  divContainerModal.appendChild(submitButton);

  form.appendChild(divContainerModalHeader);
  form.appendChild(divContainerModal);
  modal.appendChild(form);
  main.insertBefore(modal,feed);
  let submitButtonSelector = document.querySelector('button[type="submit"]');
  form.setAttribute("onSubmit","return false;");
  submitButtonSelector.addEventListener("click", (event) => {
    event.preventDefault();
    fetchSignup(event);

  })
} 

function showAllUpvotes(){
  if(document.querySelector("#upVotesModal") != null){
    document.querySelector("#upVotesModal").remove();
  }
  let main = document.querySelector("main");
  let feed = document.querySelector("#feed");
  let modal = document.createElement("div");
  modal.setAttribute("class","modal");
  modal.setAttribute("id","upVotesModal");
  let div = document.createElement("div");
  div.setAttribute("class","modalInside animate");
  let divContainerModalHeader = document.createElement("div");
  divContainerModalHeader.setAttribute("style","background-color:#f1f1f1");
  divContainerModalHeader.setAttribute("class","containerModalHeader");
  let cancelButton = document.createElement("button");
  cancelButton.setAttribute("class","btn cancelbtn");
  let cancelText = document.createTextNode("X");
  cancelButton.appendChild(cancelText);
  cancelButton.addEventListener("click",() => {
      document.getElementById('upVotesModal').style.display='none'
  })
  divContainerModalHeader.appendChild(cancelButton);
  let divContainerModal = document.createElement("div");
  divContainerModal.setAttribute("id","modal-content-upvotes");
  divContainerModal.setAttribute("class","containerModalVotes");
  div.appendChild(divContainerModalHeader);
  div.appendChild(divContainerModal);
  modal.appendChild(div);
  main.insertBefore(modal,feed);
}

function login(){
  if(document.querySelector("#signin") != null){
    document.querySelector("#signin").remove();
  }
  if(document.querySelector("#signup") != null){
    document.querySelector("#signup").remove();
  }
  let main = document.querySelector("main");
  let feed = document.querySelector("#feed");

  let modal = document.createElement("div");
  modal.setAttribute("class","modal");
  modal.setAttribute("id","signin");

  let form = document.createElement("form");
  form.setAttribute("class","modalInside animate");

  let divContainerModalHeader = document.createElement("div");
  divContainerModalHeader.setAttribute("style","background-color:#f1f1f1");
  divContainerModalHeader.setAttribute("class","containerModalHeader");
  let cancelButton = document.createElement("button");
  cancelButton.setAttribute("class","btn cancelbtn");
  let cancelText = document.createTextNode("X");
  cancelButton.appendChild(cancelText);
  cancelButton.addEventListener("click",() => {
      document.getElementById('signin').style.display='none'
  })
  divContainerModalHeader.appendChild(cancelButton);

  let divContainerModal = document.createElement("div");
  divContainerModal.setAttribute("class","containerModal");

  let labelUsername = document.createElement("label");
  let usernameText = document.createTextNode("Username");
  labelUsername.appendChild(usernameText);

  let inputUsername = document.createElement("input");
  inputUsername.setAttribute("id","inputUsernameLogin");
  inputUsername.setAttribute("class","inputBoxes");
  inputUsername.setAttribute("type","text");
  inputUsername.setAttribute("placeholder","Enter Username");
  inputUsername.setAttribute("name","uname");

  divContainerModal.appendChild(labelUsername);
  divContainerModal.appendChild(inputUsername);

  let labelPassword = document.createElement("label");
  let passwordText = document.createTextNode("Password");
  labelPassword.appendChild(passwordText);

  let inputPassword = document.createElement("input");
  inputPassword.setAttribute("id","inputPasswordLogin");
  inputPassword.setAttribute("class","inputBoxes");
  inputPassword.setAttribute("type","password");
  inputPassword.setAttribute("placeholder","Enter Password");
  inputPassword.setAttribute("name","pass");

  divContainerModal.appendChild(labelPassword);
  divContainerModal.appendChild(inputPassword);

  let submitButton = document.createElement("button");
  let submitText = document.createTextNode("Submit");
  submitButton.appendChild(submitText);
  submitButton.setAttribute("class","button button-secondary");
  submitButton.setAttribute("type","submit");
  divContainerModal.appendChild(submitButton);

  form.appendChild(divContainerModalHeader);
  form.appendChild(divContainerModal);
  modal.appendChild(form);
  main.insertBefore(modal,feed);
  form.setAttribute("onSubmit","return false;");

  let submitButtonSelector = document.querySelector('button[type="submit"]');
  submitButtonSelector.addEventListener("click", (event) => {
    event.preventDefault();
    fetchLogin(event);

  })
}
function popUpSuccess(textMessage){
  let alertDiv= document.createElement("div");
  alertDiv.setAttribute("class","alert success");
  let text = document.createTextNode(`SUCCESS! ${textMessage}`);
  let strong = document.createElement("p");
  strong.setAttribute("class","alertmessage");
  strong.appendChild(text);
  alertDiv.appendChild(strong);
  let feed = document.querySelector("#feed");
  let main = document.querySelector("main");
  main.insertBefore(alertDiv,feed);


  setTimeout(() =>{
    alertDiv.style.display = "none";
  },6000);

}
function fetchSignup(event){
  let url = `${backendUrl}/auth/signup`
  let username = document.querySelector('#inputUsernameSignup').value;
  let password = document.querySelector('#inputPasswordSignup').value;
  let email = document.querySelector('#inputEmail').value;
  let name = document.querySelector('#inputName').value;
  let data = {"username" : username,"password":password,"email":email,"name":name};
  if(username === '' || password === '' || email ==='' || name===''){
    alert("Please fill out all fields :)");
  } else {
      fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json',
        }
      })
      .then(r => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(r => {
        let modal = document.getElementById('signup');
        modal.style.display = "none";
        popUpSuccess("created a new account");
      })
      .catch ((error) => {
        alert("Account already exists, perhaps try logging in");
      })
  }
}
function fetchLogin(event){
  event.preventDefault();
  let url = `${backendUrl}/auth/login`
  let username = document.querySelector('#inputUsernameLogin').value;
  let password = document.querySelector('#inputPasswordLogin').value;
  let data = {"username" : username,"password":password};
  if(username === '' || password === ''){
    alert("Please fill out all fields :)");
  } else {
      fetch(url, {
        method: 'POST', 
        credentials: 'omit' ,
        body: JSON.stringify(data), 
        headers:{
          'Content-Type': 'application/json',
        }
      })
      .then(r => {
        if (r.ok) {
          return r.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(r => {
        // to make sure the user is still logged in when refreshing the page
        window.localStorage.setItem('token',r.token);
        let modal = document.getElementById('signin');
        modal.style.display = "none";

        document.querySelector("#logo").addEventListener("click", () => {
          sedditButton();
        })
        // display logout button
        displayLogoutProfile(r.token);
        // display the feed
        loadLoggedInPosts(r.token);
        // display post button for logged in user
        displayPostForLoggedIn(r.token);

      })
      .catch ((error) => {
        alert("INVALID USERNAME/PASSWORD");
      })
  }
}
function displayPostForLoggedIn(token){
  // remove initial post button
  let feedheader =  document.querySelector(".feed-header");
  feedheader.children[1].remove();
  // create new button
  let postButton = document.createElement("button");
  postButton.setAttribute("class","button button-secondary");
  postButton.innerText = "Post";
  feedheader.append(postButton);

// for logged in user when they click on post
  postButton.addEventListener("click", () => {
    createNewPost();
    newPostContents(token);
    document.getElementById('postModal').style.display='block';
    let modal = document.getElementById('postModal');
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  })
}

function displayLogoutProfile(token){
  // this is for logged in users
  if( document.querySelector("Button[data-id-login]") != null){
    document.querySelector("Button[data-id-login]").parentElement.remove();
  }
  
  let signupParent = document.querySelector("Button[data-id-signup]").parentElement;
  if(document.querySelector("Button[data-id-signup]") != null){
    document.querySelector("Button[data-id-signup]").remove();
  }
  
  let logoutButton = document.createElement("button");
  logoutButton.setAttribute("class","button button-primary");
  logoutButton.innerText = "logout";

  signupParent.appendChild(logoutButton);

  let navItem = document.createElement("li");
  navItem.setAttribute("class","nav-item");

  // profile button
  let profileButton = document.createElement("button")
  profileButton.setAttribute("class","button button-secondary");
  profileButton.innerText = "Profile";

  navItem.appendChild(profileButton);

  document.querySelector(".nav").append(navItem);

  profileButton.addEventListener("click", () => {
    // display profile modal and other useful informations
    createProfileModal();
    fetchLoggedInProfile(token,null);
    // since this is a logged in user, we can add update button etc

    document.getElementById('profileModal').style.display='block';
    let modal = document.getElementById('profileModal');

    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  })
  logoutButton.addEventListener("click",() => {
    window.localStorage.clear();
    initializeTemplate();
    loginSignupButton();
    loadInitialPosts();
  })
}
function fetchLoggedInProfile(token,id){
  let url = '';
  if(id != null){
    url =  `${backendUrl}/user/?username=${id}`
  } else {
    url = `${backendUrl}/user/`
  }
  let TokenAuth = 'Token ' + token;
  fetch(url, {
    method: 'GET', 
    credentials: 'omit' ,
    headers:{
      'Authorization': TokenAuth          
    }
  })
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(r => {
    // r.posts is array of post ids
    countNumUpvotes(r.posts,token);
    if(id != null){
      // other user's info
      displayProfileInfo(r,token,id);
    } else {
      // their own info
      displayProfileInfo(r,token,null);
    }
  })
  .catch ((error) => {
    alert("something went wrong :(");
  })
}

function displayProfileInfo(r,token,id){
  let labelUpvotes = document.querySelector("#upvotesLabel");
  let modalBody = document.querySelector("#modal-profile-body");

  let usernameLabel = document.createElement("label");
  usernameLabel.innerText = "Username";
  let puserName = document.createElement("p");
  puserName.innerText = r.username;

  let nameLabel = document.createElement("label");
  nameLabel.innerText = "Name";
  let pName = document.createElement("p");
  pName.innerText = r.name;

  let emailLabel = document.createElement("label");
  emailLabel.innerText = "Email";
  let pEmail = document.createElement("p");
  pEmail.innerText = r.email;

  let followingNumLabel = document.createElement("label");
  followingNumLabel.innerText = "Following";
  let pFollowing = document.createElement("p");
  pFollowing.innerText = `following ${r.following.length} users`;
  pFollowing.setAttribute("class","following");
  pFollowing.addEventListener("click", () => {
    showAllUpvotes();
    // list all upvotes users
    removeUpvotersList();
    addFollowings(r.following,token);
    document.getElementById('upVotesModal').style.display='block';
    let modal = document.getElementById('upVotesModal');

    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  })
  let followersLabel = document.createElement("label");
  followersLabel.innerText = "Followers";
  let pFollowers = document.createElement("p");
  pFollowers.innerText = `followed by ${r.followed_num} users`;
  let postsMadelabel = document.createElement("label");
  postsMadelabel.innerText = "Posts";
  usernameLabel.setAttribute("class","labelProfile");
  nameLabel.setAttribute("class","labelProfile");
  emailLabel.setAttribute("class","labelProfile");
  followingNumLabel.setAttribute("class","labelProfile");
  followersLabel.setAttribute("class","labelProfile");
  postsMadelabel.setAttribute("class","labelProfile");
  modalBody.insertBefore(puserName,labelUpvotes);
  modalBody.insertBefore(usernameLabel,puserName);
  modalBody.insertBefore(pName,usernameLabel);
  modalBody.insertBefore(nameLabel,pName);
  modalBody.append(emailLabel,pEmail,followingNumLabel,pFollowing,
    followersLabel,pFollowers);
  let updateDiv = document.createElement("div");
  updateDiv.setAttribute("style","display:flex;")
  let updateButton = document.createElement("button");
  updateButton.setAttribute("class","button button-primary updateButton");
  updateButton.innerText = "Update";
  let allPostsButton = document.createElement("button");
  allPostsButton.setAttribute("class","button button-primary postsMade");
  allPostsButton.innerText = `Posts by ${r.name}`;
  allPostsButton.addEventListener("click", () => {
    displayPostsMadeModal(token,r.username)
    let modal = document.querySelector("#profileModal");
    modal.style.display = "none";

  })

  modalBody.insertBefore(updateDiv,modalBody.firstChild);
  modalBody.append(postsMadelabel,allPostsButton);
  if(id != null){
    // add follow/unfollow button
    addFollowUnfollowButton(token,id)
  } else {
    updateDiv.append(updateButton);
  }
  // update button when pressed will show a new page for updating infos
  updateButton.addEventListener("click",() => {
    // remove the current modal, show the new modal, post the requests, redisplay the updated modal
    // this way when the user finished updating, they will see a live update.
    let oldProfileModal = document.querySelector("#profileModal");
    if(oldProfileModal != null) {
      oldProfileModal.remove();
      
    }
    // create the modal first
    createProfileModal();
    let modal = document.querySelector("#profileModal");
    modal.style.display = "block";
    let upvoteP = document.querySelector("#modal-profile-body");
    while(upvoteP.firstChild){
      upvoteP.removeChild(upvoteP.firstChild);
    }
    updateProfileModalBody(token);
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  })
}
function addFollowings(r,token){
  // r is list of followers id
  for(let i of r){
    fetchUserById(i,token)
    .then(result => {
      let divName = document.createElement("div");
      let p = document.createElement("p");
      p.setAttribute("class","upvoters")
      p.innerText = result.username;
      divName.append(p);
      divName.addEventListener("click",() => {
        createProfileModal();
        fetchuser(token)
        .then(res => {
          if(res.username === result.username){
            fetchLoggedInProfile(token,null);
          } else {
            fetchLoggedInProfile(token,result.username);
          }
        })
        document.getElementById('profileModal').style.display='block';
        let modal = document.getElementById('profileModal');
    
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      })
      let contentVoteModal = document.querySelector("#modal-content-upvotes");
      contentVoteModal.append(divName);
    })
    .catch(error => alert(error))
  }
}
function fetchUserById(id,token){
  return new Promise(function(resolve,reject){
    let url = `${backendUrl}/user/?id=${id}`
    fetch(url, {
      method: 'GET',  
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then(r => {
      if(r.ok){
       return r.json();
      } else {
        throw new Error("something went wrong :(");
      }  
    })
    .then(res => {
      resolve(res);
    })
    .catch(error => {
      alert(error);
    })
  })
}
function addFollowUnfollowButton(token,id){
  // check if the user is already following
  fetchuser(token)
  .then(r => {
    // r is current logged in user's json
    fetchUserByUsername(id,token)
    .then(res => {
      let modal = document.querySelector("#modal-profile-body");
      if(r.following.includes(res.id)){
        // display unfollow button
        let div = document.createElement("div");
        div.setAttribute("style","display:flex;");
        div.setAttribute("class","followunfollowcontainer");
        let but = document.createElement("button");
        but.setAttribute("class","button button-primary buttonUnfollow");
        but.innerText = "Unfollow";
        div.append(but);
        modal.insertBefore(div,modal.firstChild);
        but.addEventListener("click",() => {
          unfollowButton(token,id);
        })

      } else {
        // display follow button
        let div = document.createElement("div");
        div.setAttribute("style","display:flex;");
        div.setAttribute("class","followunfollowcontainer");
        let but = document.createElement("button");
        but.setAttribute("class","button button-primary buttonFollow");
        but.innerText = "Follow";
        div.append(but);
        modal.insertBefore(div,modal.firstChild);
        but.addEventListener("click",() => {
          followButton(token,id);
        })
      }
    })
    .catch(error => {
      alert(error.message)
    })
  })
}
function followButton(token,username){
  let url = `${backendUrl}/user/follow?username=${username}`
  fetch(url, {
    method: 'PUT',  
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
  .then(r => {
    if(r.ok){
      let modal = document.querySelector("#modal-profile-body");
      document.querySelector(".followunfollowcontainer").remove();
      let div = document.createElement("div");
      div.setAttribute("style","display:flex;");
      div.setAttribute("class","followunfollowcontainer");
      let button = document.createElement("button");
      button.setAttribute("class","button button-primary buttonUnfollow");
      button.innerText = "Unfollow";
      button.addEventListener("click",() => {
        unfollowButton(token,username)
      })
      div.append(button);      
      modal.insertBefore(div,modal.firstChild);
    } else {
      throw new Error("something went wrong :(");
    }  
  })
  .catch(error => {
    alert(error);
  })
}
function unfollowButton(token,username){
  let url = `${backendUrl}/user/unfollow?username=${username}`
  fetch(url, {
    method: 'PUT',  
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
  .then(r => {
    if(r.ok){
      let modal = document.querySelector("#modal-profile-body");
      document.querySelector(".followunfollowcontainer").remove();
      let div = document.createElement("div");
      div.setAttribute("style","display:flex;");
      div.setAttribute("class","followunfollowcontainer");
      let button = document.createElement("button");
      button.setAttribute("class","button button-primary buttonFollow");
      button.innerText = "Follow";
      button.addEventListener("click",() => {
        followButton(token,username)
      })
      div.append(button);
      modal.insertBefore(div,modal.firstChild);
    } else {
      throw new Error("something went wrong :(");
    }  
  })
  .catch(error => {
    alert(error);
  })

}
function fetchUserByUsername(id,token){
  return new Promise(function(resolve,reject){
    let url = `${backendUrl}/user/?username=${id}`
    fetch(url, {
      method: 'GET',  
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then(r => {
      if(r.ok){
       return r.json();
      } else {
        // throw new Error("something went wrong :(");
      }  
    })
    .then(res => {
      resolve(res);
    })
    .catch(error => {
      alert(error);
    })
  })
}
function addUpdateDeleteButton(token,username){
  let allPosts = document.querySelectorAll(".post");
  for(let i of allPosts){
    let divUpdateDelete = document.createElement("div");
    divUpdateDelete.setAttribute("class","divupdatedelete")
    let updateButton = document.createElement("button");
    updateButton.setAttribute("class","button button-primary buttonupdatedel")
    updateButton.innerText = "Update";
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("class","button button-primary buttonupdatedel");
    deleteButton.innerText = "delete";
    divUpdateDelete.append(updateButton,deleteButton);

    deleteButton.addEventListener("click", () => {
      deletePost(token,i,username);
    })

    updateButton.addEventListener("click", () => {
      createNewPost();
      updatePostContent(token,i);

      document.getElementById('postModal').style.display='block';
      let modal = document.getElementById('postModal');
      window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
    })

    i.append(divUpdateDelete);
  }
}
function deletePost(token,i,username){
  let id = '';
  if(i.children.length === 4){
    id = i.children[2].id.split('post')[1]
  } else {
    id = i.children[1].id.split('post')[1]
  }
  let url = `${backendUrl}/post/?id=${id}`;
  // public posts
    fetch(url, {
      method: 'DELETE',  
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      }
    })
    .then(r => r.json())
    .then(r => {
      if(r.message === 'success'){
        displayPostsMadeModal(token,username)
      } else {
        throw new Error("You are not authorized to do this")
      }
    })
    .catch(error => {
      alert(error)
    })
}

function fetchuser(token){
  return new Promise(function(resolve,reject) {
    let url = `${backendUrl}/user/`
    // public posts
      fetch(url, {
        method: 'GET',  
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`
        }
      })
      .then(r => r.json())
      .then(r => {
        resolve(r)
      })
  })
}
function displayPostsMadeModal(token,username){
  // user -> to indicate if the current user is looking at their own post
  // username -> fetch post of this "username"
  document.querySelector(".feed-title").innerText = `Posts by ${username}`
  let initialPosts = document.querySelectorAll("li[data-id-post]");
  if(initialPosts != null){
    for(let i of initialPosts){
      i.remove();
    }
  }
  let url = `${backendUrl}/user/?username=${username}`
// public posts
  fetch(url, {
    method: 'GET',  
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    }
  })
  .then(r => r.json())
  .then(r => {
    let arrofpromises = [];
    for(let i of r.posts){
      arrofpromises.push(fetchPostNoUpdate(i,token));
    } 
    Promise.all(arrofpromises)
    .then((arrofposts) => {
      createElementFromPosts(arrofposts,'true',token);
    })
    .then(() => {
          // if token belongs to username, then show options to update/delete
      fetchuser(token)
      .then(i => {
        if(i.username === username){
        // add update and delete button
        addUpdateDeleteButton(token,username);
        } 
      })
    })
  })
}
function fetchPostNoUpdate(id,token){
  return new Promise(function(resolve, reject) {
    let url = `${backendUrl}/post/?id=${id}`
    let TokenAuth = 'Token ' + token;
    fetch(url, {
      method: 'GET', 
      credentials: 'omit' ,
      headers:{
        'Authorization': TokenAuth          
      }
    })
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(r => {
      resolve(r);
    })
    .catch ((error) => {
      alert("something went wrong :(");
    })
  });
}

function updateProfileModalBody(token){
  let divLabel = document.createElement("div");
  divLabel.setAttribute("class","divlabel");
  let labelTitle = document.createElement("label");
  labelTitle.innerText = "Update your profile";
  labelTitle.setAttribute("class","labeltitle")
  divLabel.append(labelTitle);
  let labelEmail = document.createElement("label");
  labelEmail.innerText = "Email";
  labelEmail.setAttribute("class","labelProfile");
  let labelName = document.createElement("label");
  labelName.innerText = "Name";
  labelName.setAttribute("class","labelProfile");
  let labelPassword = document.createElement("label");
  labelPassword.innerText = "Password";
  labelPassword.setAttribute("class","labelProfile");
  let inputEmail = document.createElement("input");
  inputEmail.setAttribute("id","updateInputEmail");
  inputEmail.setAttribute("class","inputBoxes");
  inputEmail.setAttribute("placeholder","Email Address");
  inputEmail.setAttribute("type","email");

  let inputName = document.createElement("input");
  inputName.setAttribute("id","updateInputName");
  inputName.setAttribute("class","inputBoxes");
  inputName.setAttribute("placeholder","Name");
  let inputPassword = document.createElement("input");
  inputPassword.setAttribute("id","updateInputPassword");
  inputPassword.setAttribute("class","inputBoxes");
  inputPassword.setAttribute("placeholder","New Password");
  inputPassword.setAttribute("type","password");
  let submitButton = document.createElement("button");
  submitButton.setAttribute("class","button button-secondary");
  submitButton.innerText = "submit";
  let modal = document.querySelector("#modal-profile-body");
  modal.append(divLabel,labelEmail,inputEmail,labelName,inputName,labelPassword,inputPassword,submitButton);
  fillUpdateForm(token);
  submitButton.addEventListener("click", () => {
    submitUpdateProfile(token);
  })
}
function fillUpdateForm(token){
  let url = `${backendUrl}/user/`;
  let tokenAuth = `Token ${token}`;
  fetch(url, {
    method: 'GET', 
    credentials: 'omit' ,
    headers:{
      'Content-Type': 'application/json',
      'Authorization': tokenAuth
    }
  })
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(r => {
    let name = document.querySelector("#updateInputName");
    let email = document.querySelector("#updateInputEmail");
    name.setAttribute("value",r.name);
    email.setAttribute("value",r.email);

  })
  .catch(error => {
    alert("Something went wrong");
  })

}

function submitUpdateProfile(token){
  let name = document.querySelector("#updateInputName").value;
  let email = document.querySelector("#updateInputEmail").value;
  let password = document.querySelector("#updateInputPassword").value;
  if(name != '' && email != '' && password != ''){
    let tokenAuth = `Token ${token}`;
    let url =  `${backendUrl}/user/`;
    let payload = {"email":email,"name":name,"password":password};
    fetch(url, {
      method: 'PUT', 
      credentials: 'omit' ,
      body: JSON.stringify(payload), 
      headers:{
        'Content-Type': 'application/json',
        'Authorization': tokenAuth
      }
    })
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(r => {
      // display profile modal and other useful informations
      if(r.msg === 'success'){
        createProfileModal();
        fetchLoggedInProfile(token,null);
        document.getElementById('profileModal').style.display='block';
        let modal = document.getElementById('profileModal');
  
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      } else {
        throw new Error('Something went wrong');
      }
    })
    .catch(error => {
      alert("Something went wrong");
    })
  } else {
    alert("please fill out all forms")
  }
}

function countNumUpvotes(r,token){
  for(let i of r){
    countUpvotesInPost(i,token)
  }
}

function countUpvotesInPost(id,token){
    let url = `${backendUrl}/post/?id=${id}`
    let TokenAuth = 'Token ' + token;
    fetch(url, {
      method: 'GET', 
      credentials: 'omit' ,
      headers:{
        'Authorization': TokenAuth          
      }
    })
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(r => {
      let initial = Number(document.querySelector("#upvotecount").innerText.split(' ')[0]);
      initial += r.meta.upvotes.length;
      document.querySelector("#upvotecount").innerText = `${initial} upvotes`;
    })
    .catch ((error) => {
      alert("something went wrong :(");
    })  
}

function createElementFromPosts(posts,loggedin,token){
  if(posts.length == 0){
    return;
  }
  posts.sort((a, b) => {
      return parseFloat(b.meta.published) - parseFloat(a.meta.published);
  });
  for(let i of posts){
    // document.body.appendChild(img);
    let ulList = document.querySelector("Ul[data-id-feed]");
    let liItem = document.createElement("li");
    liItem.setAttribute("class","post");
    liItem.setAttribute("data-id-post","");
    let divVote = document.createElement("div");
    let voteIcon = document.createElement("i");
    voteIcon.setAttribute("class","material-icons voteIcon notVote");
    voteIcon.innerText = "thumb_up";
    divVote.setAttribute("class","vote");
    divVote.appendChild(voteIcon);
    let downVoteIcon = document.createElement("i");
    downVoteIcon.setAttribute("class","material-icons voteIcon notVote");
    downVoteIcon.innerText = "thumb_down";
    divVote.appendChild(downVoteIcon);
    // this is for voting
    voteIcon.addEventListener("click",()=>{
      if(loggedin === 'false'){
        login();
        document.getElementById('signin').style.display='block';
        let modal = document.getElementById('signin');
  
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      } else {
        // if user is logged in
          // if the user upvote this post
          voteIcon.classList.add("voted");
          upvoteThisPost(i,token);        
      }
    })
    downVoteIcon.addEventListener("click",()=>{
      if(loggedin === 'false'){
        login();
        document.getElementById('signin').style.display='block';
        let modal = document.getElementById('signin');
  
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      } else {
        // if user is logged in
          // if the user upvote this post
          voteIcon.classList.add("voted");
          downvoteThisPost(i,token);        
      }
    })
    liItem.appendChild(divVote);
    let thumbnail = i.image;
    if(thumbnail != null){
      let divImgThumb = document.createElement("div");
      let imgThumb = document.createElement("img");
      imgThumb.src= `data:image/png;base64,${thumbnail}`;
      imgThumb.setAttribute("class","imgTitle");
      divImgThumb.appendChild(imgThumb);
      liItem.appendChild(divImgThumb);
      imgThumb.addEventListener("click", () => {
        createNewPost();
        addImage(i.image);
        document.getElementById('postModal').style.display='block';
        let modal = document.getElementById('postModal');
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      })
    }
    let divContent = document.createElement("div");
    divContent.setAttribute("class","content");
    divContent.setAttribute("id",`post${i.id}`);
    let header = document.createElement("h4");
    header.setAttribute("data-id-title","");
    header.setAttribute("class","post-title alt-text");
    let title = document.createTextNode(i.title);
    header.appendChild(title);
    let paraText = document.createElement("p");
    paraText.innerText = i.text;
    let pPostAuthor = document.createElement("P");
    pPostAuthor.setAttribute("class","post-author");
    pPostAuthor.setAttribute("data-id-author","");
    let postAuthortext = document.createTextNode(`posted by ${i.meta.author} to /s/${i.meta.subseddit}`);
    pPostAuthor.appendChild(postAuthortext);
    pPostAuthor.addEventListener("click",() => {
      if(loggedin === 'false'){
        // display login button
        login();
        document.getElementById('signin').style.display='block';
        let modal = document.getElementById('signin');
  
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      } else {
        createProfileModal();
        fetchuser(token)
        .then(res => {
          if(res.username === i.meta.author){
            fetchLoggedInProfile(token,null);
          } else {
            fetchLoggedInProfile(token,i.meta.author);
          }
        })
        document.getElementById('profileModal').style.display='block';
        let modal = document.getElementById('profileModal');
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }

      }
    })
    let divCommentUpvoteAuthor = document.createElement("div");
    divCommentUpvoteAuthor.setAttribute("class","commentupauth")
    let divCommentUpvotes = document.createElement("div");
    divCommentUpvotes.setAttribute("class","commentUpVotes");
    let paraComment = document.createElement("p");
    paraComment.innerText = `${i.comments.length} comment`;
    paraComment.setAttribute("class","comments");
    // see all comments list
    paraComment.addEventListener("click",() => {
      if(loggedin === 'false'){
        // display login button
        login();
        document.getElementById('signin').style.display='block';
        let modal = document.getElementById('signin');
  
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      } else {
        // display comments modal
        showAllComments();
        // refresh the modal
        removeCommentsList();
        // display the comments in post i
        showCommentsUsers(i,token);
        addCommentBox(token,i);
        document.getElementById('commentsModal').style.display='block';
        let modal = document.getElementById('commentsModal');
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      }
    })
    let paraUpvotes = document.createElement("p");
    paraUpvotes.setAttribute("class","upvotes");
    paraUpvotes.setAttribute("data-id-upvotes","");
    paraUpvotes.innerText = `${i.meta.upvotes.length} upvotes`;
    // see all upvotes list
    paraUpvotes.addEventListener("click",() => {
      if(loggedin === 'false'){
        // display login button
        login();
        document.getElementById('signin').style.display='block';
        let modal = document.getElementById('signin');
  
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      } else {
        showAllUpvotes();
        // list all upvotes users
        removeUpvotersList();
        showAllVoters(i,token);
  
        document.getElementById('upVotesModal').style.display='block';
        let modal = document.getElementById('upVotesModal');
  
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      }
    })
    divCommentUpvotes.appendChild(paraComment);
    divCommentUpvotes.appendChild(paraUpvotes);

    divCommentUpvoteAuthor.appendChild(divCommentUpvotes);
    divCommentUpvoteAuthor.appendChild(pPostAuthor);
    divContent.append(header);
    divContent.append(paraText);
    divContent.append(divCommentUpvoteAuthor);
    liItem.append(divContent);
    ulList.append(liItem);
  }
}
function addImage(image){
  let modalContent = document.querySelector("#modal-content-posts");
  let img = document.createElement("img");
  img.src = `data:image/png;base64,${image}`
  img.setAttribute("class","postImageBig");
  modalContent.append(img);
}
function upvoteThisPost(i,token){
  let url = `${backendUrl}/post/vote?id=${i.id}`
  let TokenAuth = 'Token ' + token;
  fetch(url, {
    method: 'PUT', 
    credentials: 'omit' ,
    headers:{
      'Authorization': TokenAuth          
    }
  })
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(r => {
    fetchPost(i.id,token);
  })
  .catch ((error) => {
    alert("something went wrong :(");
  })
}
function fetchPost(id,token){
  return new Promise(function(resolve, reject) {
    let url = `${backendUrl}/post/?id=${id}`
    let TokenAuth = 'Token ' + token;
    fetch(url, {
      method: 'GET', 
      credentials: 'omit' ,
      headers:{
        'Authorization': TokenAuth          
      }
    })
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then(r => {
      let upvote = document.querySelector(`#post${id}`).childNodes[2].childNodes[0].childNodes[1];
      upvote.innerText = `${r.meta.upvotes.length} upvotes`;
      let comment = document.querySelector(`#post${id}`).childNodes[2].childNodes[0].childNodes[0];
      comment.innerText = `${r.comments.length} comments`;
      resolve(r);
    })
    .catch ((error) => {
      alert("something went wrong :(");
    })
  });
}
function downvoteThisPost(i,token){
  let url = `${backendUrl}/post/vote?id=${i.id}`
  let TokenAuth = 'Token ' + token;
  fetch(url, {
    method: 'DELETE', 
    credentials: 'omit' ,
    headers:{
      'Authorization': TokenAuth          
    }
  })
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Already Downvoted');
    }
  })
  .then(r => {
    fetchPost(i.id,token);
  })
  .catch ((error) => {
    alert("You didnt upvote this post");
  })
}
function removeUpvotersList(){
 let upvotersList = document.querySelector("#modal-content-upvotes");
 while(upvotersList.firstChild){
  upvotersList.removeChild(upvotersList.firstChild);
 }
}
function removeCommentsList(){
  let commentsList = document.querySelector("#modal-content-comments");
  while(commentsList.firstChild){
    commentsList.removeChild(commentsList.firstChild);
  }
}
function addCommentBox(token,i){
  let commentsList = document.querySelector("#modal-content-comments");
  let divInputBox = document.createElement("div");
  divInputBox.setAttribute("class","CommentSection");
  let inputBox = document.createElement("input");
  inputBox.setAttribute("class","inputComment");
  divInputBox.append(inputBox);
  
  let buttonPost = document.createElement("button");
  buttonPost.setAttribute("class","button button-secondary buttonComment");
  buttonPost.innerText = "post";
  divInputBox.append(buttonPost);
  commentsList.append(divInputBox);

  // add listener to post comment button, once posted, refresh the comments
  buttonPost.addEventListener("click", () => {
    let textComment = document.querySelector(".inputComment").value;
    submitComment(token,textComment,i);
  })
}
function submitComment(token,text,i){
  let payload = {"comment":text};
  let tokenAuth =  `Token ${token}`;
  let url = `${backendUrl}/post/comment?id=${i.id}`;
  fetch(url, {
    method: 'PUT', 
    credentials: 'omit' ,
    body: JSON.stringify(payload), 
    headers:{
      'Content-Type': 'application/json',
      'Authorization': tokenAuth
    }
  })
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(r => {
    // r is message with success status
    // empty the input box and reload the comments
    // removecomments list and fetch the post, then pass it to addcomments(i)
    removeCommentsList(); // remove the comments
    // display the comments in post i
    fetchPost(i.id,token)
    .then(r => {
      removeCommentsList();
      showCommentsUsers(r,token);
      addCommentBox(token,i);
    })
  })
  .catch(error => {
    alert("Something went wrong :( ");
  })
}
function showAllVoters(i,token){
  fetchPost(i.id,token)
  .then(post => {
    let upVotesArray = post.meta.upvotes;
    if(upVotesArray.length > 0){
      // fetch voters details and put it inside content of vote modal
      let contentVoteModal = document.querySelector("#modal-content-upvotes")
      // i is the user id
      for(let i of upVotesArray){
        let url = `${backendUrl}/user/?id=${i}`
        let TokenAuth = 'Token ' + token;
        fetch(url, {
          method: 'GET', 
          credentials: 'omit' ,
          headers:{
            'Authorization': TokenAuth          
          }
        })
        .then(r => {
          if (r.ok) {
            return r.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(r => {
          let divName = document.createElement("div");
          let p = document.createElement("p");
          p.setAttribute("class","upvoters")
          p.innerText = r.username;
          divName.append(p);
          divName.addEventListener("click",() => {
            createProfileModal();
            fetchuser(token)
            .then(res => {
              if(res.username === r.username){
                fetchLoggedInProfile(token,null);
              } else {
                fetchLoggedInProfile(token,r.username);
              }
            })
            document.getElementById('profileModal').style.display='block';
            let modal = document.getElementById('profileModal');
            window.onclick = function(event) {
              if (event.target == modal) {
                  modal.style.display = "none";
              }
            }
          })
          contentVoteModal.append(divName);
        })
        .catch ((error) => {
          alert("something went wrong :(");
        })
        }
      }

  })  
}
function showCommentsUsers(i,token){
  let commentsArray = i.comments;
  if(commentsArray.length > 0){
    let commentsModalContent = document.querySelector("#modal-content-comments")
    // i is the user id
    let divComments = document.createElement("div");
    divComments.setAttribute("class","AllComments")
    for(let i of commentsArray){
      let divIndividualComment = document.createElement("div");
      divIndividualComment.setAttribute("class","indivComment");
      let pAuthor = document.createElement("p");
      pAuthor.setAttribute("class","post-author");
      pAuthor.innerText = i.author;
      pAuthor.addEventListener("click", () => {
        createProfileModal();
        fetchuser(token)
        .then(res => {
          if(res.username === i.author){
            fetchLoggedInProfile(token,null);
          } else {
            fetchLoggedInProfile(token,i.author);
          }
        })
        document.getElementById('profileModal').style.display='block';
        let modal = document.getElementById('profileModal');
    
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      })
      divIndividualComment.append(pAuthor);
      let pComment = document.createElement("p");
      pComment.innerText = i.comment;
      pComment.setAttribute("class","commentContent");
      divIndividualComment.appendChild(pComment);
      divComments.append(divIndividualComment);
    }
    commentsModalContent.append(divComments);
  }
}
function showAllComments(){
  if(document.querySelector("#commentsModal") != null){
    document.querySelector("#commentsModal").remove();
  }
  let main = document.querySelector("main");
  let feed = document.querySelector("#feed");

  let modal = document.createElement("div");
  modal.setAttribute("class","modal");
  modal.setAttribute("id","commentsModal");

  let div = document.createElement("div");
  div.setAttribute("class","modalInside animate");

  let divContainerModalHeader = document.createElement("div");
  divContainerModalHeader.setAttribute("style","background-color:#f1f1f1");
  divContainerModalHeader.setAttribute("class","containerModalHeader");
  let cancelButton = document.createElement("button");
  cancelButton.setAttribute("class","btn cancelbtn");
  let cancelText = document.createTextNode("X");
  cancelButton.appendChild(cancelText);
  cancelButton.addEventListener("click",() => {
      document.getElementById('commentsModal').style.display='none'
  })
  divContainerModalHeader.appendChild(cancelButton);
  let divContainerModal = document.createElement("div");
  divContainerModal.setAttribute("id","modal-content-comments");
  divContainerModal.setAttribute("class","containerModalComments");
  div.appendChild(divContainerModalHeader);
  div.appendChild(divContainerModal);
  modal.appendChild(div);
  main.insertBefore(modal,feed);
}
function createHeader(){
  let divRoot = document.querySelector("#root");
  let header = document.createElement("header");
  header.setAttribute("class","banner");
  header.setAttribute("id","nav");
  let h1 = document.createElement("h1");
  h1.setAttribute("id","logo");
  h1.setAttribute("class","flex-center");
  h1.innerText = "Seddit";
  header.appendChild(h1);
  let ul = document.createElement("ul");
  ul.setAttribute("class","nav");
  header.appendChild(ul);
  let liSearch = document.createElement("li");
  liSearch.setAttribute("class","nav-item");
  let inputSearch = document.createElement("input");
  inputSearch.setAttribute("id","search");
  inputSearch.setAttribute("data-id-search","");
  inputSearch.setAttribute("placeholder","Search Seddit");
  inputSearch.setAttribute("type","search");
  inputSearch.addEventListener("keyup",(event) => {
    event.preventDefault();
    if(event.keyCode === 13){
      let token = window.localStorage.getItem('token');
      if(token != null){
        // user is logged in
        let query = inputSearch.value;
        if(query != ""){
          fetchuser(token)
          .then(r => {
            Promise.all(r.following.map(f => fetchUserById(f,token)))
            .then(result => {
              let allPosts = [];
              for(let user of result){
                for(let post of user.posts){
                  allPosts.push(post);
                }
              }
              Promise.all(allPosts.map(p => fetchPostNoUpdate(p,token)))
              .then(posts => {
                console.log(posts);
                query = query.toLowerCase();
                let arrRes = [];
                for(let i of posts){
                  let title = i.title.toLowerCase();
                  let text = i.text.toLowerCase();
                  if(title.search(query) != -1 ||  text.search(query) != -1){
                    // either in title or text
                    arrRes.push(i);
                  }
                }
                let initialPosts = document.querySelectorAll("li[data-id-post]");
                if(initialPosts != null){
                  for(let i of initialPosts){
                    i.remove();
                  }
                }
                if (arrRes.length == 0){
                  document.querySelector(".feed-title").innerText = `No results found for '${query}'`
                } else {
                  document.querySelector(".feed-title").innerText = `Search result for '${query}'`
                  createElementFromPosts(arrRes,true,token);
                }
              })
            })
          })
        }
      } else {
        // pop up signin
        login();
        document.getElementById('signin').style.display='block';
        let modal = document.getElementById('signin');
        window.onclick = function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        }
      }
    }
  })
  liSearch.appendChild(inputSearch);
  ul.appendChild(liSearch);
  let liLogin = document.createElement("li");
  liLogin.setAttribute("class","nav-item");
  let buttonLogin = document.createElement("button");
  liLogin.appendChild(buttonLogin);
  buttonLogin.setAttribute("data-id-login","");
  buttonLogin.setAttribute("class","button button-primary");
  buttonLogin.innerText = "Log in";
  liLogin.appendChild(buttonLogin);
  ul.appendChild(liLogin);
  let liSignup = document.createElement("li");
  liSignup.setAttribute("class","nav-item");
  let buttonSignup = document.createElement("button");
  liSignup.appendChild(buttonSignup);
  buttonSignup.setAttribute("data-id-signup","");
  buttonSignup.setAttribute("class","button button-secondary");
  buttonSignup.innerText = "Sign Up";
  liSignup.appendChild(buttonSignup);
  ul.appendChild(liSignup);
  header.appendChild(ul);
  divRoot.appendChild(header);
}
function createMain(){
  let divRoot = document.querySelector("#root");
  let main = document.createElement("main");
  divRoot.appendChild(main);
  main.setAttribute("role","main");
  let ulFeed = document.createElement("ul");
  ulFeed.setAttribute("id","feed");
  ulFeed.setAttribute("data-id-feed","");
  let divFeedHeader = document.createElement("div");
  divFeedHeader.setAttribute("class","feed-header");
  let h3feed = document.createElement("h3");
  h3feed.setAttribute("class","feed-title alt-text");
  h3feed.innerText = "Popular posts";
  divFeedHeader.appendChild(h3feed);
  let buttonPost = document.createElement("Button");
  buttonPost.setAttribute("class","button button-secondary");
  buttonPost.innerText = "Post";
  buttonPost.addEventListener("click",() =>{
    login();
    document.getElementById('signin').style.display='block';
    let modal = document.getElementById('signin');
    window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
    }
  })
  divFeedHeader.appendChild(buttonPost);
  ulFeed.appendChild(divFeedHeader);
  main.appendChild(ulFeed);
  divRoot.appendChild(main);
}
function initializeTemplate(){
  // make sure to delete everything under root
  let divRoot = document.querySelector("#root");
  while(divRoot.firstChild){
    divRoot.removeChild(divRoot.firstChild);
  }
  // create header
  createHeader();
  createMain();
}
function loginSignupButton(){
  let loginButton = document.querySelectorAll("button[data-id-login]");
  let signupButton = document.querySelectorAll("button[data-id-signup]");
// add listener to signin
  loginButton[0].addEventListener("click", () => {
      login();
      document.getElementById('signin').style.display='block';
      let modal = document.getElementById('signin');
      window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
  });
// add listener to signup
  signupButton[0].addEventListener("click", () => {
      signup();
      document.getElementById('signup').style.display='block';
      let modal = document.getElementById('signup');
      window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
      }
  });
}
function updatePostContent(token,i){
  let contentModal = document.querySelector("#modal-content-posts");
  let labelTitle = document.createElement("label");
  labelTitle.innerText = "Title"
  let inputTitle = document.createElement("input");
  inputTitle.setAttribute("id","inputTitlePost");
  inputTitle.setAttribute("class","inputBoxes");
  inputTitle.setAttribute("type","text");
  inputTitle.setAttribute("placeholder","Enter title here");
  let lableSubreddit = document.createElement("label");
  lableSubreddit.innerText = "Subreddit"
  let inputSubreddit = document.createElement("input");
  inputSubreddit.setAttribute("id","inputSubreddit");
  inputSubreddit.setAttribute("class","inputBoxes");
  inputSubreddit.setAttribute("type","text");
  inputSubreddit.setAttribute("placeholder","Enter Subreddit here");
  let lableContent = document.createElement("label");
  lableContent.innerText = "Post"
  let inputContent = document.createElement("textarea");
  inputContent.setAttribute("id","inputContent");
  inputContent.setAttribute("name","postContent");
  inputContent.setAttribute("class","inputBoxes");
  inputContent.setAttribute("type","text");
  inputContent.setAttribute("placeholder","Enter post here");
  let imageFileLabel = document.createElement("label");
  imageFileLabel.innerText = "Upload Image";
  let imageFileInput = document.createElement("input");
  imageFileInput.setAttribute("class",'imagePostStyle');
  imageFileInput.setAttribute("id","imagePost");
  imageFileInput.setAttribute("type","file");
  imageFileInput.setAttribute("accept",".jpg, .jpeg, .png");
  let SubmitButton = document.createElement("button");
  SubmitButton.setAttribute("class","button button-secondary buttonSubmitPost");
  SubmitButton.innerText = "Submit";
  let divSubmit = document.createElement("div");
  divSubmit.setAttribute("class","divSubmitPost");
  divSubmit.append(SubmitButton);
  // push all to content modal
  contentModal.append(labelTitle,inputTitle,lableSubreddit,
    inputSubreddit,lableContent,inputContent,imageFileLabel,imageFileInput,divSubmit);
  // add listener to submit to submit post, delete the modal
  let id = '';
  if(i.children.length === 4){
    id = i.children[2].id.split('post')[1]
  } else {
    id = i.children[1].id.split('post')[1]
  }
  fetchPostNoUpdate(id,token)
  .then(r => {
      inputTitle.value = r.title;
      inputContent.value = r.text;
      inputSubreddit.value = r.meta.subseddit;
      SubmitButton.addEventListener("click", () => {
        // get the image and check if the length is bigger than 0
        let files = document.querySelector("#imagePost").files;
        if(files.length > 0){
          // user provided an image
          convertToBase64(files[0])
          .then((imageFile) => {
            updateNewPostSubmit(id,token,imageFile)
          })
        } else {
          // doesnt provide any image
          updateNewPostSubmit(id,token,null);
        }
    })
  })
}
function updateNewPostSubmit(id,token,image){

  let tokenAuth = `Token ${token}`;
  let url = `${backendUrl}/post/?id=${id}`
  let title = document.querySelector('#inputTitlePost').value;
  let subseddit = document.querySelector('#inputSubreddit').value;
  let postBody = document.querySelector("#inputContent").value;
  if(title === '' || subseddit === '' || postBody === ''){
    alert("Please fill out all fields")
    return;
  }
  let data = {"title" : title,"text":postBody,"image":image};
  fetch(url, {
    method: 'PUT', 
    credentials: 'omit' ,
    body: JSON.stringify(data), 
    headers:{
      'Content-Type': 'application/json',
      'Authorization': tokenAuth
    }
  })
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(r => {
    console.log(r);
    let modal = document.getElementById('postModal');
    modal.style.display = "none";
    // ensure it's not clashing with other post's modals
    modal.remove();
    fetchuser(token)
    .then(res => {
      displayPostsMadeModal(token,res.username)
    })
  })
  .catch ((error) => {
    alert(error);
  })
}
function newPostContents(token){
  let contentModal = document.querySelector("#modal-content-posts");
  let labelTitle = document.createElement("label");
  labelTitle.innerText = "Title"
  let inputTitle = document.createElement("input");
  inputTitle.setAttribute("id","inputTitlePost");
  inputTitle.setAttribute("class","inputBoxes");
  inputTitle.setAttribute("type","text");
  inputTitle.setAttribute("placeholder","Enter title here");
  let lableSubreddit = document.createElement("label");
  lableSubreddit.innerText = "Subreddit"
  let inputSubreddit = document.createElement("input");
  inputSubreddit.setAttribute("id","inputSubreddit");
  inputSubreddit.setAttribute("class","inputBoxes");
  inputSubreddit.setAttribute("type","text");
  inputSubreddit.setAttribute("placeholder","Enter Subreddit here");
  let lableContent = document.createElement("label");
  lableContent.innerText = "Post"
  let inputContent = document.createElement("textarea");
  inputContent.setAttribute("id","inputContent");
  inputContent.setAttribute("name","postContent");
  inputContent.setAttribute("class","inputBoxes");
  inputContent.setAttribute("type","text");
  inputContent.setAttribute("placeholder","Enter post here");
  let imageFileLabel = document.createElement("label");
  imageFileLabel.innerText = "Upload Image";
  let imageFileInput = document.createElement("input");
  imageFileInput.setAttribute("class",'imagePostStyle');
  imageFileInput.setAttribute("id","imagePost");
  imageFileInput.setAttribute("type","file");
  imageFileInput.setAttribute("accept",".jpg, .jpeg, .png");
  let SubmitButton = document.createElement("button");
  SubmitButton.setAttribute("class","button button-secondary buttonSubmitPost");
  SubmitButton.innerText = "Submit";
  let divSubmit = document.createElement("div");
  divSubmit.setAttribute("class","divSubmitPost");
  divSubmit.append(SubmitButton);
  // push all to content modal
  contentModal.append(labelTitle,inputTitle,lableSubreddit,
    inputSubreddit,lableContent,inputContent,imageFileLabel,imageFileInput,divSubmit);
  // add listener to submit to submit post, delete the modal
  SubmitButton.addEventListener("click", () => {
    // get the image and check if the length is bigger than 0
    let files = document.querySelector("#imagePost").files;
    if(files.length > 0){
      // user provided an image
      convertToBase64(files[0])
      .then((imageFile) => {
        submitNewPost(token,imageFile)
      })
    } else {
      // doesnt provide any image
      submitNewPost(token,null);
    }
  })
}
function convertToBase64(file){
  return new Promise(function (resolve,reject) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let imageWithoutDataType = reader.result.split(',')[1];
      resolve(imageWithoutDataType);
    }
  })
}
function submitNewPost(token,image){
  let tokenAuth = `Token ${token}`;
  let url = `${backendUrl}/post/`
  let title = document.querySelector('#inputTitlePost').value;
  let subseddit = document.querySelector('#inputSubreddit').value;
  let postBody = document.querySelector("#inputContent").value;

  if(title === '' || subseddit === '' || postBody === ''){
    alert("Please fill out all fields")
    return;
  }
  let data = {"title" : title,"text":postBody,"subseddit":subseddit,"image":image};
  fetch(url, {
    method: 'POST', 
    credentials: 'omit' ,
    body: JSON.stringify(data), 
    headers:{
      'Content-Type': 'application/json',
      'Authorization': tokenAuth
    }
  })
  .then(r => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(r => {
    let modal = document.getElementById('postModal');
    modal.style.display = "none";
    // ensure it's not clashing with other post's modals
    modal.remove();
    popUpSuccess("you posted a new post");
  })
  .catch ((error) => {
    alert(error);
  })

}
function createProfileModal(){
  if(document.querySelector("#profileModal") != null){
    document.querySelector("#profileModal").remove();
  }
  let main = document.querySelector("main");
  let feed = document.querySelector("#feed");

  let modal = document.createElement("div");
  modal.setAttribute("class","modal");
  modal.setAttribute("id","profileModal");

  let div = document.createElement("div");
  div.setAttribute("class","modalInside animate");

  let divContainerModalHeader = document.createElement("div");
  divContainerModalHeader.setAttribute("style","background-color:#f1f1f1");
  divContainerModalHeader.setAttribute("class","containerModalHeader");
  let cancelButton = document.createElement("button");
  cancelButton.setAttribute("class","btn cancelbtn");
  let cancelText = document.createTextNode("X");
  cancelButton.appendChild(cancelText);
  cancelButton.addEventListener("click",() => {
      document.getElementById('profileModal').style.display='none'
  })
  divContainerModalHeader.appendChild(cancelButton);
  let divContainerModal = document.createElement("div");
  divContainerModal.setAttribute("id","modal-profile-body");
  divContainerModal.setAttribute("class","containerModalProfile");
  div.appendChild(divContainerModalHeader);
  div.appendChild(divContainerModal);
  modal.appendChild(div);
  main.insertBefore(modal,feed);
  let labelUpvotes = document.createElement("label");
  labelUpvotes.innerText = "Upvotes";
  labelUpvotes.setAttribute("id","upvotesLabel");
  labelUpvotes.setAttribute("class","labelProfile");
  let p = document.createElement("p");
  p.setAttribute("id","upvotecount");
  p.innerText = "0 upvote";
  document.querySelector("#modal-profile-body").append(labelUpvotes);
  document.querySelector("#modal-profile-body").append(p);
}
function createNewPost(){
  if(document.querySelector("#postModal") != null){
    document.querySelector("#postModal").remove();
  }
  let main = document.querySelector("main");
  let feed = document.querySelector("#feed");
  let modal = document.createElement("div");
  modal.setAttribute("class","modal");
  modal.setAttribute("id","postModal");
  let div = document.createElement("div");
  div.setAttribute("class","modalInside animate");
  let divContainerModalHeader = document.createElement("div");
  divContainerModalHeader.setAttribute("style","background-color:#f1f1f1");
  divContainerModalHeader.setAttribute("class","containerModalHeader");
  let cancelButton = document.createElement("button");
  cancelButton.setAttribute("class","btn cancelbtn");
  let cancelText = document.createTextNode("X");
  cancelButton.appendChild(cancelText);
  cancelButton.addEventListener("click",() => {
      document.getElementById('postModal').style.display='none'
  })
  divContainerModalHeader.appendChild(cancelButton);
  let divContainerModal = document.createElement("div");
  divContainerModal.setAttribute("id","modal-content-posts");
  divContainerModal.setAttribute("class","containerModalPosts");
  div.appendChild(divContainerModalHeader);
  div.appendChild(divContainerModal);
  modal.appendChild(div);
  main.insertBefore(modal,feed);
}
function loadInitialPosts(){
  let initialPosts = document.querySelectorAll("li[data-id-post]");
  if(initialPosts != null){
    for(let i of initialPosts){
      i.remove();
    }
  }
  let url = `${backendUrl}/post/public`
// public posts
  fetch(url, {
    method: 'GET',  
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then(r => r.json())
  .then(r => {
    let arrOfPosts = r.posts;
    createElementFromPosts(arrOfPosts,'false','0');
  })
}
function loadLoggedInPosts(token){
  // delete all initial posts if there's any
  let initialPosts = document.querySelectorAll("li[data-id-post]");
  if(initialPosts != null){
    for(let i of initialPosts){
      i.remove();
    }
  }
  let pInitial = 0;
  let nInitial = 6;
  loadFeedPN(pInitial,nInitial,token);
  var scroll = function scroll(){
    if (document.body.scrollHeight <= (window.scrollY + window.innerHeight)) {
      // bottom of the page
      pInitial += 6;
      if(document.querySelector(".feed-title").innerText === 'Popular posts'){
        loadFeedPN(pInitial, nInitial,token);
      }
    }
  };
  window.addEventListener("scroll",scroll,false);
}
function loadFeedPN(p,n,token){
  let TokenAuth = 'Token ' + token;
  let url = `${backendUrl}/user/feed?p=${p}&n=${n}`
// public posts
  fetch(url, {
    method: 'GET',  
    headers:{
      'Content-Type': 'application/json',
      'Authorization': TokenAuth
    }
  })
  .then(r => r.json())
  .then(r => {
    if(r.posts.length == 0){
      return;
    }
    let arrOfPosts = r.posts;
    createElementFromPosts(arrOfPosts,'true',token);
  })
}
function getHomePage(){
    // if localstorage is not empty
    if(window.localStorage.getItem("token") != null){
      let token = window.localStorage.getItem("token");
      // display logout button
      initializeTemplate();

      displayLogoutProfile(token);
      // display the feed
      loadLoggedInPosts(token);
      // display post button for logged in user
      displayPostForLoggedIn(token);
    } else {
      initializeTemplate();
      loginSignupButton();
      loadInitialPosts();
    }
    document.querySelector(".feed-title").innerText = "Popular posts";
}
function sedditButton(){
      // if localstorage is not empty
      if(window.localStorage.getItem("token") != null){
        let token = window.localStorage.getItem("token");
        // display the feed
        loadLoggedInPosts(token);
        // display post button for logged in user
        displayPostForLoggedIn(token);
      } else {
        initializeTemplate();
        loginSignupButton();
        loadInitialPosts();
      }
      document.querySelector(".feed-title").innerText = "Popular posts";
}
var backendUrl = '';
function initApp(apiUrl) {
  backendUrl = apiUrl;
  // your app initialisation goes here
  getHomePage();
  document.querySelector("#logo").addEventListener("click", () => {
    sedditButton();
  })
}
export default initApp;