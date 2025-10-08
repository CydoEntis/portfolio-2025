import Socials from '@/features/socials/components/Socials'
import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center border-t border-primary/20 p-4 space-y-2 text-muted-foreground">
      <p>&copy; 2025 &mdash; Made by Cody Stine </p>

      <Socials />
    </div>
  )
}

export default Footer