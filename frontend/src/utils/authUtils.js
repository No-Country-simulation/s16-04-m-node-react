import { toast } from 'sonner';

export const authenticateUser = async (data) => {
  if (!data.email || !data.password) {
    toast.error('Debe completar los campos');
    return;
  }

 
};
