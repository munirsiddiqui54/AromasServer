import bcrypt from 'bcrypt';

export const hashmypassword = async (password) => {
    try {
        const saltround = 10;
        return await bcrypt.hash(password, saltround);
    } catch (error) {
        console.log("Cannot hash password" + error);
    }
}

export const comparePassword = async (password, hashedpassword) => {
    return bcrypt.compare(password, hashedpassword);
}