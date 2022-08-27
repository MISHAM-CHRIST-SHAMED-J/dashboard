import React from 'react'

function Profile() {
  return (
    <section class="vh-100 bhu">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-md-9 col-lg-7 col-xl-5">
          <div class="card pra" >
            <div class="card-body p-4">
              <div class="d-flex text-black">
                <div class="flex-shrink-">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image" class="img-fluid miz"
                    />
                </div>
                <div class="flex-grow-1 ms-3 p-1 text-center">
                  <h5 class="mb-1">MISHAM CHRIST SHAMED J</h5>
                  <p class="mb-2 pb-1 phi" >Web Developer</p>
                 
                  <div class="d-flex pt-1 center">
                    <button type="button" class="btn btn-outline-primary">Edit Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Profile;