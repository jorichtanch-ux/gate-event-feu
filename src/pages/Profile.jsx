import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { supabase } from "../utils/supabase";
import { SessionContext } from '../contexts/SessionContext';
import { Link } from 'react-router';
import EditIcon from '../components/icons/EditIcon';

const Profile = () => {
    const session = useContext(SessionContext);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from("profiles")
                .select()
                .eq("id", session.user.id)
                .single();

            if (error) {
            }

            if (data) {

                setProfile(data);
                console.log("data", data);
            }
        };

        if (session?.user?.id) {
            fetchProfile();
        }
    }, [session]);

    return (
        <MainLayout>
            <div className='pt-10 flex justify-between'>

                <div>
                    {profile?.firstname} <br />
                    {profile?.lastname} <br />
                    {profile?.email}
                </div>
                <div>
                    <Link to="/edit-profile" className='btn bg-primary rounded-full flex items-center gap-2 px-4 py-2 text-white'>
                        <EditIcon size={18} />
                        <span>Edit Profile</span>
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
};

export default Profile;