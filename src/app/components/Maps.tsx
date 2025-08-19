const Maps = () => {
  return (
    <div className="w-full h-full  overflow-hidden ">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8728952490666!2d-73.9851301845938!3d40.75889627932673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855e0fbbbbb%3A0xddd5b0a3a5d0a37f!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1692441845565!5m2!1sen!2sus"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Maps;
