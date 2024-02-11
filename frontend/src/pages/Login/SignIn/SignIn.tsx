import { Box, Text } from '@radix-ui/themes';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string, ObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import { Authentication } from './SignIn.model';
import Input from '../../../components/Input/Input';

const schema: ObjectSchema<Authentication> = object({
  password: string().required(),
  email: string().email('Please enter a valid email').required(),
}).required();

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Authentication>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Authentication> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Box>
        <Text
          className=" bg-gradient-to-r from-blue-500 to-indigo-700 inline-block text-transparent bg-clip-text"
          weight="bold"
          size="6"
          as="div"
        >
          Sign In
        </Text>
        <Text as="p" className="text-gray-500 text-sm mt-2">
          Please login to continue
        </Text>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className="mt-4 space-y-7">
          <Box className="space-y-4">
            <Input name="email" label="Email:" error={errors.email?.message} type="text" register={register} />
            <div>
              <Input
                name="password"
                label="Password:"
                error={errors.password?.message}
                type="password"
                register={register}
              />
              <div className="flex justify-end mt-2">
                <button
                  type="button"
                  className=" text-indigo-400 text-sm cursor-default duration-150  hover:text-indigo-700 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </div>
          </Box>

          <div>
            <div className="flex justify-center">
              <button
                aria-label="sign in"
                className=" bg-indigo-500 text-white rounded-md px-24 py-1.5 text-sm cursor-default duration-150  hover:bg-indigo-700 hover:shadow-md"
                type="submit"
              >
                Sign in
              </button>
            </div>
            <Text as="p" className="text-gray-500 text-sm text-center mt-3">
              Don&apos;t have an account?{' '}
              <Link
                to="/sign-up"
                className="text-indigo-400 font-semibold cursor-default duration-150  hover:text-indigo-700"
              >
                Sign up
              </Link>
            </Text>
          </div>
        </Box>
      </form>
    </div>
  );
}

export default SignIn;
