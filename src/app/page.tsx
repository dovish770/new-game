'use client'
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import styles from './globals.module.scss';
import Board from '../components/board/Board';

export default function Home() {
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  useEffect(() => {
    if (isTrue) {
      setOpenDialog(true);

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [isTrue]);

  return (
    <div className={styles.board}>
      <Board setIsTrue={setIsTrue} />
      
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialogTitle-root': {
            fontSize: '5vh',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center', 
            alignItems: 'center', 
            textAlign: 'center',
            paddingBottom: '0',
          },
          '& .MuiDialogContent-root': {
            fontSize: '4vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
            borderRadius: '2vh',
            height: '100%', 
            textAlign: 'center', 
            backgroundColor: '#f0f0f0',
            color: '#333',
          },
          '& .MuiPaper-root': {
            width: '80vw',
            height: '50vh',
            minWidth: '20vw',
            minHeight: '20vh',
            borderRadius: '2vh',
            backgroundColor: '#f0f0f0',
            color: '#333',
          }
        }}
      >
        <DialogContent>
          <Typography>
          VERY NICE!
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
