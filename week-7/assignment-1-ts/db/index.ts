import mongoose from 'mongoose';

interface UserInterface {
    username?: string;
    password?: string;
}

const userSchema = new mongoose.Schema<UserInterface>({
    username: String,
    password: String,
});

interface TodoInterface {
    title?: string;
    description?: string;
    done?: boolean;
    userId?: string;
}

const todoSchema = new mongoose.Schema<TodoInterface>({
    title: String,
    description: String,
    done: Boolean,
    userId: String,
});

const User = mongoose.model<UserInterface>('User', userSchema);
const Todo = mongoose.model<TodoInterface>('Todo', todoSchema);

export {
    User,
    Todo
}