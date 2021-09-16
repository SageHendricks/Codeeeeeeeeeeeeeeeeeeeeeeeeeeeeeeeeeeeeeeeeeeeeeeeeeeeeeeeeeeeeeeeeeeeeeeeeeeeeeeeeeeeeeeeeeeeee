using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



public struct tile
{
    public string Tile;
    public tile(string str)
    {
        Tile = str;
    }
    public static implicit operator tile(string x)
    {
        return new tile(x);
    }
}
namespace rpg
{

    class Program
    {
        static void Main(string[] args)
        {

            int playerX = 1;
            int playerY = 1;
            game(playerX, playerY);
            Console.ReadKey();
        }

        static void game(int X int Y)
        {

            List<List<string>> map = new List<List<string>>()
            {
                 new List<string>() { "C1","WH","WH","WH","WH","WH","WH","WH","WH","C2" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "WV","00","00","00","00","00","00","00","00","WV" },
                 new List<string>() { "C4","WH","WH","WH","WH","WH","WH","WH","WH","C3" }
            };

            map[Y][X] = $"{map[Y][X]}{X}{Y}";


            tile[] player = { "         ",
                              "  ▓▓▓▓   ",
                              "  ▓▓▓▓   ",
                              "         " };

            tile[] empty = { "         ",
                             "         ",
                             "         ",
                             "         " };

            tile[] wallV = { "▓▓▒▒▒▒▒▓▓",
                             "▓▓▒▒▒▒▒▓▓",
                             "▓▓▒▒▒▒▒▓▓",
                             "▓▓▒▒▒▒▒▓▓" };

            tile[] wallH = { "▓▓▓▓▓▓▓▓▓",
                             "▒▒▒▒▒▒▒▒▒",
                             "▒▒▒▒▒▒▒▒▒",
                             "▓▓▓▓▓▓▓▓▓" };

            tile[] wallC1 = { "▓▓▓▓▓▓▓▓▓",
                              "▓▓▒▒▒▒▒▒▒",
                              "▓▓▒▒▒▒▒▒▒",
                              "▓▓▒▒▒▒▒▓▓" };

            tile[] wallC2 =  { "▓▓▓▓▓▓▓▓▓",
                               "▒▒▒▒▒▒▒▓▓",
                               "▒▒▒▒▒▒▒▓▓",
                               "▓▓▒▒▒▒▒▓▓" };

            tile[] wallC3 = { "▓▓▒▒▒▒▒▓▓",
                              "▒▒▒▒▒▒▒▓▓",
                              "▒▒▒▒▒▒▒▓▓",
                              "▓▓▓▓▓▓▓▓▓" };

            tile[] wallC4 = { "▓▓▒▒▒▒▒▓▓",
                              "▓▓▒▒▒▒▒▒▒",
                              "▓▓▒▒▒▒▒▒▒",
                              "▓▓▓▓▓▓▓▓▓" };

            //Console.WriteLine(wallV[3].Tile);

            for (int i = 0; i < map.Count; i++)
            {

                for (int k = 0; k < 4; k++ )
                {
                    foreach (string j in map[i])
                    {
                        if (j.Length > 2)
                        {
                            Console.Write(player[k].Tile);
                        }
                        else
                        {
                            switch (j)
                            {
                                case "WV":
                                    Console.Write(wallV[k].Tile);
                                    break;

                                case "WH":
                                    Console.Write(wallH[k].Tile);
                                    break;

                                case "C1":
                                    Console.Write(wallC1[k].Tile);
                                    break;

                                case "C2":
                                    Console.Write(wallC2[k].Tile);
                                    break;

                                case "C3":
                                    Console.Write(wallC3[k].Tile);
                                    break;

                                case "C4":
                                    Console.Write(wallC4[k].Tile);
                                    break;

                                default:
                                    Console.Write(empty[k].Tile);
                                    break;
                            }
                        }

                    }
                    Console.Write("\n");
                }

            }
            string button = Console.ReadKey().ToString();
            switch (button)
            {
                case "w":
                    map[Y][X] = $"{map[Y][X][0]}{map[Y][X][1]}";
                    game(X, Y + 1);
                    break;
            }

        }
    }
}
