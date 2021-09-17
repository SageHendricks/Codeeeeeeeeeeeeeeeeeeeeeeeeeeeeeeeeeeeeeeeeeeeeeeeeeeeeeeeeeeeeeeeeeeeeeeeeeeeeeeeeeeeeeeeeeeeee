using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System.IO;
using System.Text.RegularExpressions;

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
        public static StreamReader pukes = new StreamReader("../../Usefuk.txt");
        public static string pukesStr = pukes.ReadToEnd();

        //public static string dumb()
        //{
        //    mapStr1.Split('\t');
        //    return "";
        //}
        public static List<List<string>> Bad()
        {
            List<string> mapStr1 = pukesStr.Split('\n').ToList();
            List<List<string>> mapStr2 = new List<List<string>>();
            foreach (string line in mapStr1)
            {
                List<string> temp = Regex.Split(line,"(?:\t|\n|\r|\r\n)").ToList();
                mapStr2.Add(temp);
            }
            return mapStr2;
        }
        static void Main(string[] args)
        {
            int playerX = 1;
            int playerY = 1;
            List<List<string>> temp = Bad();
            game(playerX, playerY);

            Console.ReadKey();
        }

        static void game(int X, int Y)
        {

            // WV WH C1 C2 C3 C4 E1 E2 E3 E4 T1 T2 T3 T4 WC WS
            List<List<string>> map = Bad();

            map[Y][X] = $"{map[Y][X]}{X}{Y}";

            // tiles vvv
            
            tile[] player = {
                "        ",
                "  ▓     ",
                "        ",
                "        "
            };
            tile[] empty = {
                "        ",
                "        ",
                "        ",
                "        "
            };
            tile[] wallVertical = {
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallHorizontal = {
                "▓▓▓▓▓▓▓▓",
                "▒▒▒▒▒▒▒▒",
                "▒▒▒▒▒▒▒▒",
                "▓▓▓▓▓▓▓▓"
            };
            tile[] wallCornerTopLeft = {
                "▓▓▓▓▓▓▓▓",
                "▓▓▒▒▒▒▒▒",
                "▓▓▒▒▒▒▒▒",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallCornerTopRight = {
                "▓▓▓▓▓▓▓▓",
                "▒▒▒▒▒▒▓▓",
                "▒▒▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallCornerBottomRight = {
                "▓▓▒▒▒▒▓▓",
                "▒▒▒▒▒▒▓▓",
                "▒▒▒▒▒▒▓▓",
                "▓▓▓▓▓▓▓▓"
            };
            tile[] wallCornerBottomLeft = {
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▒▒",
                "▓▓▒▒▒▒▒▒",
                "▓▓▓▓▓▓▓▓"
            };
            tile[] wallEndTop = {
                "▓▓▓▓▓▓▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallEndRight = {
                "▓▓▓▓▓▓▓▓",
                "▒▒▒▒▒▒▓▓",
                "▒▒▒▒▒▒▓▓",
                "▓▓▓▓▓▓▓▓"
            };
            tile[] wallEndBottom = {
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▓▓▓▓▓▓"
            };
            tile[] wallEndLeft = {
                "▓▓▓▓▓▓▓▓",
                "▓▓▒▒▒▒▒▒",
                "▓▓▒▒▒▒▒▒",
                "▓▓▓▓▓▓▓▓"
            };
            tile[] wallTCrossTop = {
                "▓▓▓▓▓▓▓▓",
                "▒▒▒▒▒▒▒▒",
                "▒▒▒▒▒▒▒▒",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallTCrossRight = {
                "▓▓▒▒▒▒▓▓",
                "▒▒▒▒▒▒▓▓",
                "▒▒▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallTCrossBottom = {
                "▓▓▒▒▒▒▓▓",
                "▒▒▒▒▒▒▒▒",
                "▒▒▒▒▒▒▒▒",
                "▓▓▓▓▓▓▓▓"
            };
            tile[] wallTCrossLeft = {
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▒▒",
                "▓▓▒▒▒▒▒▒",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallCross = {
                "▓▓▒▒▒▒▓▓",
                "▒▒▒▒▒▒▒▒",
                "▒▒▒▒▒▒▒▒",
                "▓▓▒▒▒▒▓▓"
            };
            tile[] wallSingle = {
                "▓▓▓▓▓▓▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▒▒▒▒▓▓",
                "▓▓▓▓▓▓▓▓"
            };
            

            //Thread.Sleep(300);

            Console.Clear();
            for (int i = 0; i < map.Count; i++)
            {

                for (int k = 0; k < 4; k++)
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
                                    Console.Write(wallVertical[k].Tile);
                                    break;

                                case "WH":
                                    Console.Write(wallHorizontal[k].Tile);
                                    break;

                                case "C1":
                                    Console.Write(wallCornerTopLeft[k].Tile);
                                    break;

                                case "C2":
                                    Console.Write(wallCornerTopRight[k].Tile);
                                    break;

                                case "C3":
                                    Console.Write(wallCornerBottomRight[k].Tile);
                                    break;

                                case "C4":
                                    Console.Write(wallCornerBottomLeft[k].Tile);
                                    break;
                                case "E1":
                                    Console.Write(wallEndTop[k].Tile);
                                    break;

                                case "E2":
                                    Console.Write(wallEndRight[k].Tile);
                                    break;

                                case "E3":
                                    Console.Write(wallEndBottom[k].Tile);
                                    break;

                                case "E4":
                                    Console.Write(wallEndLeft[k].Tile);
                                    break;

                                case "T1":
                                    Console.Write(wallTCrossTop[k].Tile);
                                    break;

                                case "T2":
                                    Console.Write(wallTCrossRight[k].Tile);
                                    break;

                                case "T3":
                                    Console.Write(wallTCrossBottom[k].Tile);
                                    break;

                                case "T4":
                                    Console.Write(wallTCrossLeft[k].Tile);
                                    break;

                                case "WC":
                                    Console.Write(wallCross[k].Tile);
                                    break;

                                case "WS":
                                    Console.Write(wallSingle[k].Tile);
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

            switch (Console.ReadKey().Key)
            {
                case ConsoleKey.W:
                    if (map[Y - 1][X] == "00") { game(X, Y - 1); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.A:
                    if (map[Y][X - 1] == "00") { game(X - 1, Y); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.S:
                    if (map[Y + 1][X] == "00") { game(X, Y + 1); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.D:
                    if (map[Y][X + 1] == "00") { game(X + 1, Y); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.UpArrow:
                    if (map[Y - 1][X] == "00") { game(X, Y - 1); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.LeftArrow:
                    if (map[Y][X - 1] == "00") { game(X - 1, Y); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.DownArrow:
                    if (map[Y + 1][X] == "00") { game(X, Y + 1); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.RightArrow:
                    if (map[Y][X + 1] == "00") { game(X + 1, Y); }
                    else { game(X, Y); }
                    break;
                case ConsoleKey.Escape:
                    break;
                default:
                    game(X, Y);
                    break;
            }

        }
    }
}
