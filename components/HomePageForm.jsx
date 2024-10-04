"use client";

const HomePageForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="*********"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Send It</button>
    </form>
  );
};
export default HomePageForm;
