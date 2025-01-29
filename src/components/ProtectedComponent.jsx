import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedComponent = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user && !user.is_approved) {
            alert('Your account is pending approval.');
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div>
        </div>
    );
};

export default ProtectedComponent;
