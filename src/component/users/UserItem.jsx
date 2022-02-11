import PropTypes from "prop-types";
function UserItem({ user: { login, avatar_url } }) {
    return (
        <div className=" card shadow-md compact side bg-base-100">
            <div className="flex-row shadow-md item-center space-x-8 card-body">
                <div >
                    <div className="avatar ">
                        <div className="rounded-full shadow-md w-14 h-14">
                            <img src={avatar_url} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="cart-title">{login}</h2>
                </div>
            </div>

        </div>

    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;