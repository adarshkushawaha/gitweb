import os

# Your personal details
personal_details = {
    "Name": "Adarsh Kumar",
    "Degree": "B.Tech AI & DS",
    "College": "IIT Jodhpur",
    "Email": "b25cm1067@iitj.ac.in",
    "GitHub": "https://github.com/adarshkushawaha",
    "LinkedIn": "https://www.linkedin.com/in/adarshkumar2151",
    "Skills": [
        "C", "C++", "Python", "HTML", "CSS", "JavaScript", "ReactJS",
        "NodeJS", "ExpressJS", "MongoDB", "SQL", "Data Structures and Algorithms"
    ],
    "Projects": [
        "Portfolio Website",
        "E-commerce Website",
        "Blog Website",
        "Chat Application",
        "To-Do List Application"
    ]
}

def generate_portfolio_html(data):
    """Generates the HTML content for a basic portfolio website."""
    
    # 1. Structure the Skills list
    skills_list = "".join(f"<li>{skill}</li>" for skill in data['Skills'])

    # 2. Structure the Projects list
    projects_list = "".join(f"<li>{project}</li>" for project in data['Projects'])
    
    # 3. Assemble the full HTML content
    html_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{data['Name']} - Portfolio</title>
    <style>
        body {{ font-family: 'Arial', sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f9; color: #333; }}
        header {{ background: #333; color: #fff; padding: 10px 0; text-align: center; margin-bottom: 20px; }}
        header h1 {{ margin: 0; font-size: 2.5em; }}
        .container {{ width: 80%; margin: auto; overflow: hidden; background: #fff; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-radius: 8px; }}
        section {{ margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #ddd; }}
        h2 {{ color: #007bff; border-bottom: 2px solid #007bff; padding-bottom: 5px; margin-bottom: 15px; }}
        ul {{ list-style: square; padding-left: 20px; }}
        .contact-info p {{ margin: 5px 0; }}
        .social-links a {{ color: #007bff; text-decoration: none; margin-right: 15px; font-weight: bold; }}
        .social-links a:hover {{ text-decoration: underline; }}
    </style>
</head>
<body>
    <header>
        <h1>{data['Name']}</h1>
        <p>{data['Degree']} | {data['College']}</p>
    </header>

    <div class="container">
        <section class="contact-info">
            <h2>Contact & Social</h2>
            <p><strong>Email:</strong> <a href="mailto:{data['Email']}">{data['Email']}</a></p>
            <div class="social-links">
                <a href="{data['GitHub']}" target="_blank">GitHub</a>
                <a href="{data['LinkedIn']}" target="_blank">LinkedIn</a>
            </div>
        </section>

        <section class="skills">
            <h2>Skills</h2>
            <ul>
                {skills_list}
            </ul>
        </section>

        <section class="projects">
            <h2>Projects</h2>
            <ul>
                {projects_list}
            </ul>
        </section>
    </div>
</body>
</html>
"""
    return html_content

# --- Execution ---
html_output = generate_portfolio_html(personal_details)
file_name = "portfolio.html"

# Write the HTML content to a file
try:
    with open(file_name, "w") as file:
        file.write(html_output)
    
    print(f"✅ Success! HTML portfolio website created: {os.path.abspath(file_name)}")
    print(f"To view the website, open the '{file_name}' file in any web browser.")

except Exception as e:
    print(f"❌ An error occurred while writing the file: {e}")