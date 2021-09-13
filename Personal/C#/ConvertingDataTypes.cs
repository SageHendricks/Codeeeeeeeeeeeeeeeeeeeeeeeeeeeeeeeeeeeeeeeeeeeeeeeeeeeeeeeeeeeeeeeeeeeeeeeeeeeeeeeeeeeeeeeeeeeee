using System;

namespace Review
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            //boolean to string
            bool cat = false;
            string value1 = cat.ToString();
            Console.WriteLine(value1);

            //string to list of chars
            char[] value2 = value1.ToCharArray();
            foreach (char value3 in value2)
            {
                Console.WriteLine(value3);
            }

            //converting double to decimal
            double value4 = 17332;
            decimal value5 = Convert.ToDecimal(value4);
            Console.WriteLine(value5);
            */
        }
    }
}

namespace UserSignIn
{
    public class UserInfo
    {
        public Person(string name)
        {
            string Username = Sage;
            string Password = 123;

        }
    }

    static void SignIn()
    {
        
        
        //User Authentication
        Console.WriteLine("Enter username");
        string name = Console.ReadLine();

        if (Username = name)
        {
            Console.WriteLine("Welcome " name "!");
            Console.WriteLine("Press any key to continue.");
            Console.ReadKey();
        }
        else
        {
            //Closes window
            Console.WriteLine("User not found.");
            Console.WriteLine("Click any button to continue.");
            Console.ReadKey();
            this.Close();
        }
        
        //Pasword Authentication
        Console.WriteLine("Enter password");
        string pswd = Console.ReadLine();

        if (Password = pswd)
        {
            Console.WriteLine("Sign in was Sucsesful")
        }
        else
        {
            //Closes window
            Console.WriteLine("Password is incorrect.");
            Console.WriteLine("Click any button to continue.");
            Console.ReadKey();
            this.Close();
        }
    }

}