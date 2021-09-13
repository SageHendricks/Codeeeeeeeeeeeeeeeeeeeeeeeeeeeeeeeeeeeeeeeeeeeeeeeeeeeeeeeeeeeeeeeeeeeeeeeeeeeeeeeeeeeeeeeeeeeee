import numpy as np
from matplotlib import pyplot as plt
import keyboard
import threading

# mapa = [[1,1,1,1,1],
#         [1,0,0,0,1],
#         [1,1,1,0,1],
#         [1,0,0,0,1],
#         [1,0,1,1,1]]

mapa = [[1,1,1,1,1,1,1,1,1,1],
        [1,0,0,1,0,0,1,0,0,1],
        [1,0,0,1,0,0,1,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,1],
        [1,0,0,1,0,0,1,0,0,1],
        [1,1,1,1,0,0,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1]]

for i in range(len(mapa)):
    for j in range(len(mapa[i])):
        if mapa[i][j] == 1:
            mapa[i][j] = list(np.random.uniform(0,1,3))
            
posx, posy, rot = 2, 5, 0
# posx, posy, rot = -10000, -1000, 0
exitx, exity = 3, 3

pickles = 0

key = threading.Thread()
key.run()

while 1:
    mapa.pop()
    mapa.append([1,0,0,1,0,0,1,0,0,1])
    mapa.append([1,0,0,1,0,0,1,0,0,1])
    mapa.append([1,0,0,0,0,0,0,0,0,1])
    mapa.append([1,0,0,0,0,0,0,0,0,1])
    mapa.append([1,0,0,1,0,0,1,0,0,1])
    mapa.append([1,1,1,1,0,0,1,1,1,1])
    mapa.append([1,1,1,1,1,1,1,1,1,1])

    # mapa.append([1,0,0,0,1])
    # mapa.append([1,1,1,0,1])
    # mapa.append([1,0,0,0,1])
    # mapa.append([1,0,1,1,1])

    plt.hlines(-0.6, 0, 60, colors='gray', lw=165, alpha=0.5)
    plt.hlines(0.6, 0, 60, colors='lightblue', lw=165)
    tilex, tiley, tilec = [], [], []
    for i in range(60):
        rot_i = rot + np.deg2rad(i-30)
        x, y = posx, posy
        sin, cos = 0.02*np.sin(rot_i), 0.02*np.cos(rot_i)
        n = 0
        
        while 1:
            xx, yy = (x, y)
            x, y, n = x + cos, y + sin, n +1

            # tiles logic
            if abs(int(xx)-int(x)) > 0 or abs(int(yy)-int(y))>0:
                tilex.append(i)
                tiley.append(-1/(0.02 * n))
                if int(x) == exitx and int(y) == exity:
                    tilec.append('y')
                else:
                    tilec.append('y')

            if mapa[int(x)][int(y)]:
                h = np.clip(1/(0.02 * n), 0, 1)
                c = np.asarray(mapa[int(x)][int(y)])*0 + (0.7 * h)
                break
            
        plt.vlines(i, -h, h/2, lw=8, colors=(1*(0.3 + 0.7 * h), 1*(0.3 + 0.7 * h), 0))
        
    # plt.scatter(tilex, tiley, c=tilec, zorder=2) # draw tiles on the floor
    plt.axis('off'); plt.tight_layout(); plt.axis([0, 60, -1, 1])
    plt.draw(); plt.pause(0.0001); plt.clf()
    
    x, y = (posx, posy)

    if key == 'up':
        x, y = (x + 0.3*np.cos(rot), y + 0.3*np.sin(rot))
    elif key == 'down':
        x, y = (x - 0.3*np.cos(rot), y - 0.3*np.sin(rot))
    elif key == 'left':
        rot = rot - np.pi/8
    elif key == 'right':
        rot = rot + np.pi/8
    elif key == 'esc':
        break

    if mapa[int(x)][int(y)] == 0:
        # if int(posx) == exitx and int(posy) == exity:
        #     break
        posx, posy = (x + 0.1*np.cos(rot), y + 0.1*np.sin(rot))


plt.close()