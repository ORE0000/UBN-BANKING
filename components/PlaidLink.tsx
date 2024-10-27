import React from 'react'
import { Button } from './ui/button'

const PlaidLink = ({user,variant}:PlaidLinkProps) => {
  return (
    <>
    {variant ==='primary'?(
        <Button>
            Connect bank
        </Button>
    ):variant==='ghost'?(
        <Button>
            Connect bank
        </Button>
    ):(
        <Button>
            Connect bank
        </Button>
    )
    }
    </>
  )
}

export default PlaidLink