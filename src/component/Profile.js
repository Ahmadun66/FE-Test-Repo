import React, { useEffect } from 'react';
import profile from '../assets/profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    useEffect(() => {
        if(!isAuthenticated){
            navigate('/')
        }
        dispatch(getUserProfile());
    }, [dispatch]);

    
    
    return (
        <div className='h-[600px] flex items-center'>
            <div className="max-w-sm w-96 flex justify-center flex-col  items-center  mx-auto bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <img
                        className="w-16 h-16 rounded-full"
                        src={profile}
                        alt="Profile"
                    />
                </div>
                <div className="flex items-center space-x-6 mt-4">
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                            <span className="font-medium text-gray-900 dark:text-white">Nama:</span>
                            <span className="text-gray-500 dark:text-gray-400">{user?.name}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-medium text-gray-900 dark:text-white">Email:</span>
                            <span className="text-gray-500 dark:text-gray-400">{user?.email}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-medium text-gray-900 dark:text-white">Jenis Kelamin:</span>
                            <span className="text-gray-500 dark:text-gray-400">{user?.jenisKelamin}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Profile;
