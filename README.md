# Educational Hub - Women's Rights & Empowerment

## 📖 Overview

The **Educational Hub** is a comprehensive web page dedicated to educating women and girls about their fundamental human rights, safety, justice, and equality. This page serves as a resource center providing articles, blogs, videos, and insights to empower women with knowledge about their rights and how to advocate for themselves.

---

## 🎯 Purpose

The Educational Hub aims to:
- **Educate** women and girls about their basic human rights
- **Empower** through knowledge of safety, justice, and equality
- **Inspire** action and advocacy for gender equality
- **Provide resources** for women seeking support and information
- **Build awareness** about critical issues affecting women globally

---

## 🌟 Key Features

### 1. **Hero Banner**
- Full-width banner image with "Educational Hub" title
- Subtitle: "Safety and Justice"
- Eye-catching gradient text overlay for immediate visual impact

### 2. **Introduction Section**
- Pink gradient background matching the SDG 5 & 16 color scheme
- Clear mission statement about the page's purpose
- Welcoming and informative tone

### 3. **Feature Section - "Know Your Woman Right"**
- Full-width hero image with text overlay
- Introduces the main content section
- Creates visual hierarchy and flow

### 4. **Women's Rights Cards**
A comprehensive grid layout featuring **7 fundamental rights**:
1. **Right to Education** - Access to learning and career building
2. **Right to Safety** - Freedom from violence and abuse
3. **Right to Healthcare** - Reproductive, menstrual, and mental health
4. **Right to Equal Opportunities** - Jobs, pay, and leadership
5. **Right to Speak and Be Heard** - Voice and participation
6. **Right to Own Property & Finances** - Economic independence
7. **Right to Justice** - Legal protection and fair hearing

Each card includes:
- Bold title with number
- Brief description
- Bulleted list of specific rights (displayed in 2-column grid)
- Hover effects for interactivity
- Pink accent colors for brand consistency

### 5. **Empowerment Message**
- Full-width highlighted card
- Closing statement emphasizing community strength
- Pink gradient background with border accent

### 6. **Emergency Contact Button**
- Fixed position phone icon (bottom right)
- Vertical "Emergency" text
- Always visible while scrolling
- High z-index for accessibility
- Hover animation for interactivity

---

## 🎨 Design System

### **Color Palette** (SDG 5 & 16)
- **Primary Pink**: `#E2007A` (Magenta - SDG 5 Gender Equality)
- **Secondary Rose**: `#B85C89` 
- **Accent Purple**: `#8A3FFC` (SDG 16 Peace & Justice)
- **Light Pink Background**: `#FCE8EF`
- **White**: `#FFFFFF`
- **Text Dark**: `#333`, `#555`, `#666`

### **Typography**
- Font Family: `'Open Sans', 'Segoe UI', sans-serif`
- Headings: Bold, uppercase for emphasis
- Body Text: Clean, readable line-height (1.6-1.8)
- Font Sizes: Responsive scaling for mobile/tablet/desktop

### **Layout**
- **Grid System**: CSS Grid with `repeat(auto-fit, minmax(320px, 1fr))`
- **Responsive**: 3-4 cards per row (desktop) → 2 (tablet) → 1 (mobile)
- **Spacing**: Consistent padding and margins throughout
- **Cards**: White background, shadow, pink top border

### **Interactions**
- Hover effects on all cards (lift up + shadow increase)
- List items slide right on hover
- Emergency button scales on hover
- Smooth transitions (0.3s ease)

---

## 📱 Responsive Design

### **Desktop (>1024px)**
- 3-4 rights cards per row
- Full-width hero images
- 2-column lists within cards
- Optimal spacing and readability

### **Tablet (768px - 1024px)**
- 2-3 cards per row
- Adjusted font sizes
- Maintained card layout

### **Mobile (<768px)**
- Single column layout (1 card per row)
- Stacked lists (1 column)
- Reduced padding for space efficiency
- Smaller hero images
- Touch-friendly button sizes

---

## 🛠️ Technical Stack

### **HTML5**
- Semantic markup
- Accessible structure
- SEO-friendly tags

### **CSS3**
- CSS Grid for layout
- Flexbox for component alignment
- Custom properties for theming
- Smooth animations and transitions
- Media queries for responsiveness

### **JavaScript**
- Emergency button functionality (if needed)
- Smooth scroll behavior
- Interactive hover effects

---

## 📂 File Structure

```
educational-hub/
│
├── index.html              # Main HTML file
├── Educational.css         # Stylesheet
├── script.js              # JavaScript functionality (if needed)
│
├── img/
│   ├── Right-of-women.jpeg    # Hero banner image
│   ├── Human-Right.jpeg       # Feature section image
│   └── phone3.png             # Emergency contact icon
│
└── README.md              # This file
```

---

## 🚀 Getting Started

### **Setup**
1. Clone or download the project files
2. Ensure all image paths are correct
3. Open `index.html` in a web browser

### **Customization**
- **Colors**: Modify CSS custom properties for brand colors
- **Content**: Update HTML text content as needed
- **Images**: Replace images in `/img` folder with your own
- **Rights Cards**: Add/remove cards by duplicating HTML structure

### **Adding New Rights Cards**
```html
<div class="right-card">
    <h4>8. Right Title</h4>
    <p>Description here</p>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
    </ul>
</div>
```

---

## ♿ Accessibility Features

- Semantic HTML structure
- Alt text for all images
- Sufficient color contrast ratios
- Keyboard navigation support
- Readable font sizes
- Clear visual hierarchy
- Focus states on interactive elements

---

## 🌍 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📊 Performance Optimization

- Compressed images for faster loading
- Minimal CSS and JavaScript
- Efficient CSS Grid layout
- Hardware-accelerated animations
- Lazy loading for images (optional enhancement)

---

## 🔮 Future Enhancements

### Planned Features:
- [ ] Search functionality for rights
- [ ] Filter/sort options
- [ ] Downloadable PDF resources
- [ ] Video content integration
- [ ] Multi-language support
- [ ] Print-friendly version
- [ ] Social media sharing buttons
- [ ] Interactive quiz about women's rights
- [ ] Resource links to support organizations
- [ ] Newsletter signup

---

## 🤝 Contributing

To contribute to this project:
1. Review the existing code structure
2. Maintain the established design system
3. Ensure responsive design is preserved
4. Test across multiple browsers
5. Follow accessibility best practices

---

## 📝 License

This project is part of the Girls Human Rights Hub initiative focused on education and empowerment.

---

## 👥 Credits

**Authors**: Chinazaekper, Rukyat, Buonny Ibrahim

**Design Inspired By**: 
- UN Women SDG 5 (Gender Equality)
- UN SDG 16 (Peace, Justice, and Strong Institutions)
- Girls Human Rights Hub

---

## 📞 Support

For questions or support regarding this page:
- Emergency assistance: [Click emergency button on page]
- General inquiries: Contact Girls Human Rights Hub
- Technical issues: Reach out to development team

---

## 🎓 Educational Resources

This page is designed to be:
- **Informative**: Clear, accurate information about women's rights
- **Accessible**: Easy to understand for all education levels
- **Actionable**: Provides practical knowledge for advocacy
- **Empowering**: Builds confidence through knowledge

---

**Remember**: Knowledge is power. When women know their rights, they can advocate for themselves and build stronger communities.

---

*