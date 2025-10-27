from flask import Flask, render_template
import requests


BLOG_URL = "https://api.npoint.io/c790b4d5cab58020d391"
response = requests.get(BLOG_URL)
blog_data = response.json()

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html", posts=blog_data)

@app.route('/post/<int:blog_id>')
def get_post(blog_id):
    post_by_id = next(post for post in blog_data if post["id"] == blog_id)
    return render_template("post.html", posts_by_id=post_by_id)


if __name__ == "__main__":
    app.run(debug=True)
