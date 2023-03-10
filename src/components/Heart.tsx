import * as React from "react"

export const Heart: React.FC<{}> = () => {
  const [count, handleCount] = React.useState(0);

  const handleChange = () => {
    handleCount(count + 1);
  }

  return (
    <>
      <button onClick={handleChange} aria-label="Heart">💜</button> × <span>{count}</span>
    </>
  )
}
