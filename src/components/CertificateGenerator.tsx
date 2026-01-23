import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Award, Download, User } from 'lucide-react';
import { courseInfo } from '@/data/courseData';

interface CertificateGeneratorProps {
  isEligible: boolean;
}

const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({ isEligible }) => {
  const [name, setName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCertificate = async () => {
    if (!name.trim()) return;
    
    setIsGenerating(true);
    
    try {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();

      // Background gradient effect (simulated with rectangles)
      doc.setFillColor(25, 30, 45);
      doc.rect(0, 0, pageWidth, pageHeight, 'F');

      // Border
      doc.setDrawColor(200, 55, 55);
      doc.setLineWidth(3);
      doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

      // Inner border
      doc.setDrawColor(100, 100, 120);
      doc.setLineWidth(0.5);
      doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

      // Header decoration
      doc.setFillColor(200, 55, 55);
      doc.rect(pageWidth / 2 - 60, 20, 120, 2, 'F');

      // Organization name
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.setFont('helvetica', 'normal');
      doc.text(courseInfo.organization, pageWidth / 2, 35, { align: 'center' });

      // Title
      doc.setFontSize(32);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(200, 55, 55);
      doc.text('CERTIFICAT DE FORMATION', pageWidth / 2, 55, { align: 'center' });

      // Subtitle
      doc.setFontSize(18);
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'normal');
      doc.text('Digital Transformation Chief Officer (CDTO)', pageWidth / 2, 70, { align: 'center' });

      // Decorative line
      doc.setFillColor(200, 55, 55);
      doc.rect(pageWidth / 2 - 40, 78, 80, 1, 'F');

      // "Décerné à" text
      doc.setFontSize(12);
      doc.setTextColor(180, 180, 190);
      doc.text('Ce certificat est décerné à', pageWidth / 2, 95, { align: 'center' });

      // Recipient name
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(name.toUpperCase(), pageWidth / 2, 115, { align: 'center' });

      // Underline for name
      const nameWidth = doc.getTextWidth(name.toUpperCase());
      doc.setDrawColor(200, 55, 55);
      doc.setLineWidth(0.5);
      doc.line(pageWidth / 2 - nameWidth / 2 - 10, 120, pageWidth / 2 + nameWidth / 2 + 10, 120);

      // Description
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(180, 180, 190);
      const description = "Pour avoir complété avec succès l'ensemble des 10 modules de la formation";
      doc.text(description, pageWidth / 2, 135, { align: 'center' });
      doc.text('"Formation à la certification CDTO"', pageWidth / 2, 143, { align: 'center' });

      // Skills acquired
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 160);
      const skills = [
        'Transformation digitale • Gouvernance • Stratégie digitale • Urbanisation SI',
        'Data & Cloud • Pilotage de programmes • Cybersécurité • Conduite du changement'
      ];
      doc.text(skills[0], pageWidth / 2, 158, { align: 'center' });
      doc.text(skills[1], pageWidth / 2, 164, { align: 'center' });

      // Date
      const today = new Date();
      const dateStr = today.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      });
      
      doc.setFontSize(10);
      doc.setTextColor(180, 180, 190);
      doc.text(`Délivré le ${dateStr}`, pageWidth / 2, 180, { align: 'center' });

      // Instructor signature area
      doc.setFontSize(10);
      doc.text('Formateur', pageWidth / 2, 192, { align: 'center' });
      
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(255, 255, 255);
      doc.text(courseInfo.instructor, pageWidth / 2, 200, { align: 'center' });

      // Credentials
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(150, 150, 160);
      doc.text(courseInfo.credentials, pageWidth / 2, 206, { align: 'center' });

      // Save PDF
      doc.save(`Certificat_CDTO_${name.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isEligible) {
    return (
      <div className="glass-card rounded-2xl p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
          <Award className="w-10 h-10 text-muted-foreground" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground mb-2">
          Certificat de formation
        </h3>
        <p className="text-muted-foreground mb-4">
          Complétez tous les modules (100%) pour débloquer votre certificat téléchargeable.
        </p>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }} />
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8 animate-scale-in border-2 border-success/30">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/20 flex items-center justify-center">
        <Award className="w-10 h-10 text-success" />
      </div>
      
      <h3 className="font-display text-xl font-bold text-foreground text-center mb-2">
        🎉 Félicitations !
      </h3>
      
      <p className="text-center text-muted-foreground mb-6">
        Vous avez complété tous les modules. Téléchargez votre certificat de formation CDTO.
      </p>

      <div className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Entrez votre nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Button
          onClick={generateCertificate}
          disabled={!name.trim() || isGenerating}
          className="w-full gradient-primary gap-2"
        >
          <Download className="w-4 h-4" />
          {isGenerating ? 'Génération...' : 'Télécharger le certificat PDF'}
        </Button>
      </div>
    </div>
  );
};

export default CertificateGenerator;
