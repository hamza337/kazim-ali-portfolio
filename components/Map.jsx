import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="Sir Syed Kazim Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217760.2395140658!2d74.1695797927329!3d31.482834782289597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727806697710!5m2!1sen!2s"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
