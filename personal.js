const personalInfo = JSON.parse(localStorage.getItem('personalInfo'));
        // Check if personalInfo is available
        if (personalInfo) {
            document.getElementById('name').textContent = 'Name : ' +personalInfo.name;
        } else {
            console.log('Personal info not found in localStorage.');
        }
        const{contact}=personalInfo;
        document.getElementById('title').textContent = 'title : ' +personalInfo.title;
        document.getElementById('email').textContent = 'Email : ' +contact.email;
        document.getElementById('phone').textContent = 'Phone : ' +contact.phone;
        document.getElementById('location').textContent = 'Location : ' +contact.location;
        document.getElementById('website').textContent = 'Website : ' +contact.website;
        document.getElementById('linkedin').textContent = 'Linkedin : ' +contact.linkedin;
        document.getElementById('github').textContent = 'Git Hub : ' +contact.github;
        document.getElementById('about').textContent = 'About : ' +personalInfo.about;

