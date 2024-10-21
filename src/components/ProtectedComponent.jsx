import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedComponent = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')); // Assuming user data is stored in localStorage

    useEffect(() => {
        if (user && !user.is_approved) {
            alert('Your account is pending approval.');
            navigate('/'); // Redirect to home or another page
        }
    }, [user, navigate]);

    return (
        <div>
            {/* Protected content */}
        </div>
    );
};

export default ProtectedComponent;
