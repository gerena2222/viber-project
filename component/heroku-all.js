const Heroku = (props) => {
  return (
    <section className="heroku">
      <div className=" text-secondary mt-5 px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-black">{props.title}</h1>
        </div>
      </div>
    </section>
  );
};
export default Heroku;
