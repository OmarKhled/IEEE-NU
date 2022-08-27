export default (name = "omar") => {
  return `<!DOCTYPE html>
      <html lang="en" style="font-family: 'Work Sans', sans-serif; line-height: 2rem">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet">
      
        <title>Egyptian Space Summit</title>
      </head>
      
      <body style="font-family: 'Work Sans', sans-serif; line-height: 2rem">
        <div class="container" style="
              font-family: 'Work Sans', sans-serif;
              line-height: 1.7rem;
              width: 80%;
              max-width: 40rem;
              margin: auto;
              background: #e5e5e5;
              padding: 2rem;
              border-radius: 20px;
              color: rgb(7, 0, 22);
              font-weight: 300;
            ">
          <div class="body" style="width: 100%;">
            <img src="https://ieeenu.com/images/edition2.webp"
              onerror="this.onerror=null;this.src='https://scontent.fcai2-2.fna.fbcdn.net/v/t39.30808-6/298568438_2139099006268921_1764684458198220184_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=340051&_nc_ohc=LXj6dvj-oxsAX8OP1yB&_nc_ht=scontent.fcai2-2.fna&oh=00_AT9ck13thW6npJioPQ0XeY3V0x5-8Wyl6utKSsAmPht0dQ&oe=630E83C9';"
              alt="" class="cover"
              style="display: block; margin: auto; width: 100%; border-radius: 10px; margin-top: 1rem;" />
            <h2 style="margin: 1.2rem 0 0 0; font-weight: 600;">Registration Confirmation</h2>
            <div style="font-weight: 500;">
              <p style="margin-bottom: 3px; margin-top: 0.7rem;">Hello ${name}!</p>
              <p style="margin: 0 0 8px 0;">
                Thanks for registering, We're excited to see you on this edition of the Egyptian Space Summit.
                Attached to this email you will find a QR Code that <span style="font-weight: 700;">must be shown on
                  attending the event</span>.
              <ul
                style="margin-top: 0.3rem; margin-bottom: 0.4rem; margin-left: 0rem; padding-left: 1.4rem; font-weight: 500;">
                <li style="margin: 0;">Date: Thursday, 1st of September</li>
                <li>Time: 9 AM</li>
                <li>Location: Nile Universty Auditorium</li>
              </ul>
              <span style="color: red;">
                Don't miss your National ID and at least a digital proof of the vaccination first dose to enter the NU gates.
              </span>
              </p>
      
              <a style="background-color: rgb(0, 153, 224);border: none;
                padding: 10px 20px;
                border-radius: 5px;
                color: #fff;
                display: block;
                max-width: fit-content;
                color: #fff!important;
                text-decoration: none!important;
                transition: all .25s linear; cursor:pointer; margin-bottom: 10px;"
                href="https://www.facebook.com/events/1702767603419516?active_tab=about" target="_blank">Visit the event page
              </a>
              IEEE NU Family.
              </p>
            </div>
          </div>
        </div>
      </body>
      </html>`;
};
