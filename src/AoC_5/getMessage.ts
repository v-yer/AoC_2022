import {Input} from "./input";

export const getMessage = (localInput: Input) => {
  let message = ''
  const lastItems = Object.values(localInput)
  lastItems.forEach(item => {
    const lastItem = item.pop()
    message += lastItem
  })
  return message
}
