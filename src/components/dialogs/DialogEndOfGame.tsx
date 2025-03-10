'use client'
import { Dialog as MUIDialog } from '@mui/material';
import styles from './Dialog.module.scss'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";

export default function DialogEndOfGame() {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const router = useRouter(); 

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(false), 3000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      router.push("/"); 
    }
  }, [isOpen, router]);

  return (
    <MUIDialog
      open={isOpen}
      className={styles.paperRoot}
    >
      <div className={styles.dialogContent}>
        <h3 className={styles.h3}>
          The Game Is Finished!
        </h3>
        <h4>
          Nice Jobe!
        </h4>
      </div>
    </MUIDialog>
  )
}