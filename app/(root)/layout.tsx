import React, {ReactNode} from 'react'


type Props = {
  children : ReactNode
};

const RootLayout = (props:Props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default RootLayout;