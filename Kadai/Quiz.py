import tkinter as tk
import tkinter.messagebox as mb

def a():
    mb.showinfo("間違い","残念でした！また挑戦してね。")

def b():
    mb.showinfo("間違い","残念でした！また挑戦してね。")

def c():
    mb.showinfo("正解","おめでとう！やりますね。")

def d():
    mb.showinfo("間違い","残念でした！また挑戦してね。")

root = tk.Tk()
root.title("4択Quiz")
root.geometry("400x250")

desc_label = tk.Label(text="次のうち、俳句の季語として認定されていないものはどれ？")
desc_label.grid()

button1 = tk.Button(
    text="サザン",
    width=20,
    command=a
)
button1.place(x=5,y=100)

button2 = tk.Button(
    text="チューブ",
    width=20,
    command=c
)
button2.place(x=5,y=150)

button3 = tk.Button(
    text="ユーミン",
    width=20,
    command=b
)
button3.place(x=210,y=100)

button4 = tk.Button(
    text="山下達郎",
    width=20,
    command=d
)
button4.place(x=210,y=150)

root.mainloop()
