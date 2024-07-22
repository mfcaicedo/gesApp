import React from 'react';
import {
    Toast,
    ToastTitle,
    ToastDescription
} from '@gluestack-ui/themed';

const ReusableToast = ({ id, action, variant, title, description }:
    { id: number, action: any, variant: any, title: string, description: string }) => {
    const uniqueToastId = "toast-" + id;
    return (
        <Toast nativeID={uniqueToastId} action={action} variant={variant}>
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{description}</ToastDescription>
        </Toast>
    );
};

export default ReusableToast;
