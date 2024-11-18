/* eslint-disable react/prop-types */
export function ShowMessage(props) {
  const { message } = props;
  return (
    <div className="text-center text-xl font-semibold">
      <p>{message}</p>
    </div>
  );
}
