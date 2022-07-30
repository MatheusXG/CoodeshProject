
import React from 'react';
import { Button, ButtonProps, Group } from '@mantine/core';
import { GoogleIcon } from './GoogleIcon';


export function GoogleButton(props: ButtonProps<'button'>) {
    return <Button leftIcon={<GoogleIcon />} variant="default" color="gray" {...props} />;
  }