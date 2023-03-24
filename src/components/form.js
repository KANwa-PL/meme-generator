function Form() {
  const [applicant, setApplicant] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    color: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setApplicant((previousApplicant) => {
      return {
        ...previousApplicant,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // Do not re-render.
    console.log(applicant);
  }

  const flex = {
    display: "flex",
    alignContent: "space-around",
    justifyContent: "center",
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={applicant.firstName}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={applicant.lastName}
          placeholder="Last Name"
        />
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={applicant.email}
          placeholder="Email"
        />
        <textarea
          style={flex}
          value={applicant.comments}
          onChange={handleChange}
          placeholder="Comments"
          name="comments"
        />
        <input
          name="isFriendly"
          type="checkbox"
          id="isFriendly"
          checked={applicant.isFriendly}
          onChange={handleChange}
        />
        <label htmlFor="isFriendly">Are your friendly?</label>
        <br />
        <br />

        <fieldset>
          <legend>Current employment status</legend>

          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="Unemployed"
            checked={applicant.employment === "Unemployed"}
            onChange={handleChange}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="Part-time"
            checked={applicant.employment === "Part-time"}
            onChange={handleChange}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="Full-time"
            checked={applicant.employment === "Full-time"}
            onChange={handleChange}
          />
          <label htmlFor="full-time">Full-time</label>
          <br />
        </fieldset>
        <br></br>
        <label htmlFor="color">What's your favorite color?</label>
        <br></br>
        <select
          id="color"
          name="color"
          value={applicant.color}
          onChange={handleChange}
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
          <option value="black">Black</option>
          <option value="indigo">Indigo</option>
          <option value="white">White</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
