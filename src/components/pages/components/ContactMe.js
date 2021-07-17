import React from "react";

function ContactMe() {
  return (
    <section class="main-section" id="contact" style={{ height: "90vh" }}>
      <p class="text-2">You can reach out to me via one of the following:</p>
      <br />
      <table>
        <tr>
          <td class="p-1">
            <a
              class="profile-link btn contact-btn contactButton"
              href="https://github.com/Forester93"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_326384.png&f=1&nofb=1"
                class="profile-link-image"
                alt="Image of Github Icon"
              />
            </a>
          </td>
          <td class="p-1">
            <a
              class="profile-link btn contact-btn contactButton"
              href="https://www.linkedin.com/in/mfekryaus93"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2F66%2F86%2Fba%2F6686ba84946cfe3890a0119c7d64cc98.png&f=1&nofb=1"
                class="profile-link-image"
                alt="Image of LinkedIn Icon"
              />
            </a>
          </td>
        </tr>
        <tr>
          <td class="p-1">
            <a class="btn contact-btn contactButton" href="tel:+61404831362">
              📱
            </a>
          </td>
          <td class="p-1">
            <a
              class="btn contact-btn contactButton"
              href="mailto:markforester93@gmail.com"
            >
              📧
            </a>
          </td>
        </tr>
      </table>
    </section>
  );
}

export default ContactMe;
