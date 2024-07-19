import React from 'react';
import { Dashboard } from '@/components/ui/dashboard';

export default function Layout({children}) {
  const clientID = "hello";

  return (
    <div>
      <Dashboard clientID={clientID}>
      <div className='w-[1200px] mx-auto flex justify-center'>
       {children}
      </div>
      </Dashboard>
    </div>
  );
}
