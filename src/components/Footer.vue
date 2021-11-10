<template>
  <footer class="footer_wrapper" id="contact">
    <div class="container">
      <section class="page_section contact" id="contact">
        <div class="contact_section">
          <h2>Contact Us</h2>
        </div>
        <div class="row">
          <div class="col-lg-4 wow fadeInLeft">
            <div class="contact_info">
              <div class="detail">
                <h4>Github</h4>
                <p>
                  <a style="color:white;" href="https://github.com/mazikdot"
                    >https://github.com/mazikdot</a
                  >
                </p>
              </div>
              <div class="detail">
                <h4>ติดต่อ</h4>
                <p>083-4016682</p>
              </div>
              <div class="detail">
                <h4>อีเมล</h4>
                <p>mazikdot@rmutsvmail.com</p>
              </div>
              <div class="detail">
                <h4>Social</h4>
                <h3 class="facebook animated bounceIn wow delay-03s">
                  <a
                    class="fa fa-facebook"
                    href="https://www.facebook.com/MADputeela/"
                  ></a>
                </h3>
              </div>
            </div>
          </div>
          <div class="col-lg-8 wow fadeInLeft delay-06s">
            <div class="form">
              <input
                class="input-text"
                type="text"
                name=""
                value="Your Name *"
                onFocus="if(this.value==this.defaultValue)this.value='';"
                onBlur="if(this.value=='')this.value=this.defaultValue;"
              />
              <input
                class="input-text"
                type="text"
                name=""
                value="Your E-mail *"
                onFocus="if(this.value==this.defaultValue)this.value='';"
                onBlur="if(this.value=='')this.value=this.defaultValue;"
              />
              <textarea
                class="input-text text-area"
                cols="0"
                rows="0"
                onFocus="if(this.value==this.defaultValue)this.value='';"
                onBlur="if(this.value=='')this.value=this.defaultValue;"
              >
Your Message *</textarea
              >
              <input class="input-btn" type="submit" value="send message" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>
